import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useLoginWithPassword, useLoginWithZalo } from '../../query';
import { setToken } from '../../store/slices/authSlice';
import { useNotification } from '../../hooks';
import { useCustomTranslation } from '../../hooks';
import { CustomCard } from '../../components';
import LoginForm from '../../components/LoginForm';
import { LoginWithPasswordDto, LoginWithZaloDto } from '../../types';
import { getZaloAuthUrl } from '../../api/auth'; // Import API function
import LanguageSwitcher from '../../components/LanguageSwitcher';

const Login = () => {
  const { t } = useCustomTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notify } = useNotification();
  const { mutate: loginWithPassword, isPending: isPasswordLoading } = useLoginWithPassword();
  const { mutate: loginWithZalo, isPending: isZaloLoading } = useLoginWithZalo();

  // Sử dụng useMutation để gọi API /api/auth/zalo-auth-url
  const { mutate: fetchZaloAuthUrl, isPending: isZaloAuthLoading } = useMutation({
    mutationFn: getZaloAuthUrl,
  });

  const handleLogin = (values: { identifier: string; password: string; rememberMe: boolean }) => {
    const { identifier, password, rememberMe } = values;
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
    const payload: LoginWithPasswordDto = { identifier, password };
    loginWithPassword(payload, {
      onSuccess: (response) => {
        dispatch(setToken({ accessToken: response.data.accessToken, refreshToken: response.data.refreshToken }));
        notify({
          type: 'success',
          message: t('login.success'),
          description: t('login.successDesc'),
        });
        navigate('/dashboard');
      },
      onError: (error) => {
        notify({
          type: 'error',
          message: t('login.error'),
          description: error.message || t('login.errorDesc'),
        });
      },
    });
  };

  const handleZaloLogin = () => {
    fetchZaloAuthUrl(undefined, {
      onSuccess: (result) => {
        if (result?.data.url) {
          const zaloUrl = result.data.url;
          const codeChallenge = 'random-code-challenge'; // Thay bằng logic tạo code_challenge thực tế
          window.location.href = zaloUrl;
          const urlParams = new URLSearchParams(window.location.search);
          const authorizationCode = urlParams.get('code');
          if (authorizationCode) {
            const payload: LoginWithZaloDto = {
              authorization_code: authorizationCode,
              code_challenge: codeChallenge,
            };
            loginWithZalo(payload, {
              onSuccess: (response) => {
                dispatch(setToken({ accessToken: response.data.accessToken, refreshToken: response.data.refreshToken }));
                notify({
                  type: 'success',
                  message: t('login.success'),
                  description: t('login.successDesc'),
                });
                navigate('/dashboard');
              },
              onError: (error) => {
                notify({
                  type: 'error',
                  message: t('login.error'),
                  description: error.message || t('login.errorDesc'),
                });
              },
            });
          }
        }
      },
      onError: (error) => {
        notify({
          type: 'error',
          message: t('login.error'),
          description: t('login.errorDesc'),
        });
      },
    });
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <CustomCard title={t('login.title')}>
        <LoginForm
          onSubmit={handleLogin}
          onZaloLogin={handleZaloLogin}
          onRegisterRedirect={handleRegisterRedirect}
        />
      </CustomCard>
    </div>
  );
};

export default Login;
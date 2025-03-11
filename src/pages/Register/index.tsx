import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignUpWithPassword, useLoginWithPassword } from '../../query';
import { setToken } from '../../store/slices/authSlice';
import { useNotification } from '../../hooks';
import { useCustomTranslation } from '../../hooks';
import { CustomCard } from '../../components';
import RegisterForm from '../../components/RegisterForm';
import { SignUpWithPasswordDto, LoginWithPasswordDto } from '../../types';

const Register = () => {
  const { t } = useCustomTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notify, contextHolder } = useNotification(); // Lấy contextHolder
  const { mutate: signUpWithPassword, isPending: isRegisterLoading } = useSignUpWithPassword();
  const { mutate: loginWithPassword, isPending: isLoginLoading } = useLoginWithPassword();

  const handleRegister = (values: SignUpWithPasswordDto) => {
    const { phone, password } = values;
    signUpWithPassword(values, {
      onSuccess: (response) => {
        notify({
          type: 'success',
          message: t('register.success'),
          description: t('register.successDesc'),
        });

        // Đăng nhập tự động sau khi đăng ký thành công
        const loginPayload: LoginWithPasswordDto = { identifier: phone, password };
        loginWithPassword(loginPayload, {
          onSuccess: (loginResponse) => {
            dispatch(setToken({
              accessToken: loginResponse.data.accessToken,
              refreshToken: loginResponse.data.refreshToken,
            }));
            notify({
              type: 'success',
              message: t('login.success'),
              description: t('login.successDesc'),
            });
            navigate('/dashboard');
          },
          onError: (loginError) => {
            notify({
              type: 'error',
              message: t('login.error'),
              description: loginError.message || t('login.errorDesc'),
            });
            // Nếu đăng nhập thất bại, vẫn chuyển về trang login
            navigate('/login');
          },
        });
      },
      onError: (error) => {
        notify({
          type: 'error',
          message: t('register.error'),
          description: error.message || t('register.errorDesc'),
        });
        // Không điều hướng, giữ nguyên trang register
      },
    });
  };

  return (
    <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {contextHolder} {/* Render contextHolder ở đây */}
      <CustomCard title={t('register.title')} style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <RegisterForm onSubmit={handleRegister} />
      </CustomCard>
    </div>
  );
};

export default Register;
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout, setToken } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, refreshToken, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = (accessToken: string, refreshToken: string) => {
    dispatch(setToken({ accessToken, refreshToken }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    token,
    refreshToken,
    isAuthenticated,
    handleLogin,
    handleLogout,
  };
};
import { refreshTokens } from '../api';
import { setToken } from '../store/slices/authSlice';
import store from '../store'; // Đảm bảo import store đã được cấu hình

export const refreshAuthTokens = async () => {
  try {
    const response = await refreshTokens();
    const { accessToken, refreshToken } = response.data;
    store.dispatch(setToken({ accessToken, refreshToken }));
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
};
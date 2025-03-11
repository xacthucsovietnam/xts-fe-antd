import api from '../axiosClient';
import { LoginWithPasswordDto, LoginResponse, ZaloAuthUrlResponse, LoginWithZaloDto, ZaloLoginResponse, SignUpWithPasswordDto, SignUpResponse, RefreshResponse } from '../../types/auth';

export const loginWithPassword = async (data: LoginWithPasswordDto): Promise<LoginResponse> => {
  return api.post('/api/auth/login-with-password', data);
};

export const getZaloAuthUrl = async (): Promise<ZaloAuthUrlResponse> => {
  return api.get('/api/auth/zalo-auth-url');
};

export const loginWithZalo = async (data: LoginWithZaloDto): Promise<ZaloLoginResponse> => {
  return api.post('/api/auth/login-with-zalo', data);
};

export const signUpWithPassword = async (data: SignUpWithPasswordDto): Promise<SignUpResponse> => {
  return api.post('/api/auth/sign-up-with-password', data);
};

export const refreshTokens = async (): Promise<RefreshResponse> => {
  return api.get('/api/auth/refresh');
};
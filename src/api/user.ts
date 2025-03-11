import api from './axiosClient';
import { CurrentUserResponse, UpdateProfileDto } from '../types/user';
import axiosClient from './axiosClient';

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  return api.get('/api/me');
};

export const updateProfile = async (formData: FormData): Promise<void> => {
  const response = await axiosClient.post('/api/user/update-profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data.data;
};
// src/api/activation/create.ts
import axios from 'axios';
import { CreateActivationDocDto, DetailActivationDocDto } from '../../types/activation';

export const createActivation = async (data: CreateActivationDocDto): Promise<DetailActivationDocDto> => {
  const response = await axios.post('/api/stamp/activation/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Giả định token được lưu trong localStorage
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
// src/api/activation/findOne.ts
import axios from 'axios';
import { DetailActivationDocDto } from '../../types/activation';

export const findOneActivation = async (id: string): Promise<DetailActivationDocDto> => {
  const response = await axios.get(`/api/stamp/activation/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
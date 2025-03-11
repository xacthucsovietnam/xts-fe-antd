// src/api/generation/create.ts
import axios from 'axios';
import { CreateGenerationDocDto, DetailGenerationDocDto } from '../../types/generation';

export const createGeneration = async (data: CreateGenerationDocDto): Promise<DetailGenerationDocDto> => {
  const response = await axios.post('/api/stamp/generation/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

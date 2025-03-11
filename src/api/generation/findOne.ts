 // src/api/generation/findOne.ts
import axios from 'axios';
import { DetailGenerationDocDto } from '../../types/generation';

export const findOneGeneration = async (id: string): Promise<DetailGenerationDocDto> => {
  const response = await axios.get(`/api/stamp/generation/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

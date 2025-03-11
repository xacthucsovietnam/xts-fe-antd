 // src/api/destruction/create.ts
import axios from 'axios';
import { CreateDestructionDocDto, DetailDestructionDocDto } from '../../types/destruction';

export const createDestruction = async (data: CreateDestructionDocDto): Promise<DetailDestructionDocDto> => {
  const response = await axios.post('/api/stamp/destruction/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

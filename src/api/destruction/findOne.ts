 // src/api/destruction/findOne.ts
import axios from 'axios';
import { DetailDestructionDocDto } from '../../types/destruction';

export const findOneDestruction = async (id: string): Promise<DetailDestructionDocDto> => {
  const response = await axios.get(`/api/stamp/destruction/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

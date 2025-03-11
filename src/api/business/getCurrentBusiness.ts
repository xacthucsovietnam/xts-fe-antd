 // src/api/business/getCurrentBusiness.ts
import axios from 'axios';
import { DetailBusinessDto } from '../../types/business';

export const getCurrentBusiness = async (): Promise<DetailBusinessDto> => {
  const response = await axios.get('/api/business/current', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

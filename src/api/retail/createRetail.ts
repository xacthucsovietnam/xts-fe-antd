 // src/api/retail/createRetail.ts
import axios from 'axios';
import { CreateRetailDto, DetailRetailOrderDto } from '../../types/retail';

export const createRetail = async (data: CreateRetailDto): Promise<DetailRetailOrderDto> => {
  const response = await axios.post('/api/stamp/retail/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data;
};

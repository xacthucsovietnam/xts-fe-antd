 // src/api/retail/getRetailDetail.ts
import axios from 'axios';
import { DetailRetailOrderDto } from '../../types/retail';

export const getRetailDetail = async (id: string): Promise<DetailRetailOrderDto> => {
  const response = await axios.get(`/api/stamp/retail/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data;
};

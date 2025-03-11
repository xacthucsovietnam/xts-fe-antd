 // src/api/business/getBusinessList.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { BusinessItemDto } from '../../types/business';

export const getBusinessList = async (): Promise<Pagination<BusinessItemDto>> => {
  const response = await axios.get('/api/business', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

 // src/api/business/createBusiness.ts
import axios from 'axios';
import { CreateBusinessDto } from '../../types/business';
import { DefaultDataType } from '../../types/common';

export const createBusiness = async (data: CreateBusinessDto): Promise<DefaultDataType> => {
  const response = await axios.post('/api/business/create', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

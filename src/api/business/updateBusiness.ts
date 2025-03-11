 // src/api/business/updateBusiness.ts
import axios from 'axios';
import { UpdateBusinessDto } from '../../types/business';
import { DefaultDataType } from '../../types/common';

export const updateBusiness = async (data: UpdateBusinessDto): Promise<DefaultDataType> => {
  const response = await axios.post('/api/business/update', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

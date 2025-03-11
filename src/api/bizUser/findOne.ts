// src/api/bizUser/findOne.ts
import axios from 'axios';
import { ListBizUserItemDto } from '../../types/bizUser';

export const findOneBizUser = async (id: string): Promise<ListBizUserItemDto> => {
  const response = await axios.get(`/api/biz-user/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType (giả định)
}; 

 // src/api/bizUser/lock.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const lockBizUser = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/biz-user/lock/${id}`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType (giả định)
};

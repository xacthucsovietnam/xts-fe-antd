 // src/api/bizUser/unlock.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const unlockBizUser = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/biz-user/unlock/${id}`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType (giả định)
};

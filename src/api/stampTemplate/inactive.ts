 // src/api/stampTemplate/inactive.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const inactiveStampTemplate = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/stamp-template/inactive/${id}`, {}, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

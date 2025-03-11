 // src/api/myInvitation/reject.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const rejectMyInvitation = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/my-invitation/reject/${id}`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

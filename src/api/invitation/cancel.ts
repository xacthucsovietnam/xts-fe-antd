 // src/api/invitation/cancel.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const cancelInvitation = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/invitation/cancel/${id}`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

 // src/api/invitation/detail.ts
import axios from 'axios';
import { InvitationDetailDto } from '../../types/invitation';

export const getInvitationDetail = async (id: string): Promise<InvitationDetailDto> => {
  const response = await axios.get(`/api/invitation/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

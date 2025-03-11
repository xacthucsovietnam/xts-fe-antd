 // src/api/myInvitation/detail.ts
import axios from 'axios';
import { MyInvitationDetailDto } from '../../types/myInvitation';

export const getMyInvitationDetail = async (id: string): Promise<MyInvitationDetailDto> => {
  const response = await axios.get(`/api/my-invitation/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

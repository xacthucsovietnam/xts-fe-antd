 // src/api/myInvitation/list.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { MyInvitationItemDto } from '../../types/myInvitation';

export const getMyInvitationList = async (
  page?: number,
  perpage?: number,
  status?: number
): Promise<Pagination<MyInvitationItemDto>> => {
  const params = { page, perpage, status };
  const response = await axios.get('/api/my-invitation/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

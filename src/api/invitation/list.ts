 // src/api/invitation/list.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { InvitationItemDto } from '../../types/invitation';

export const getInvitationList = async (
  page?: number,
  perpage?: number,
  status?: number
): Promise<Pagination<InvitationItemDto>> => {
  const params = { page, perpage, status };
  const response = await axios.get('/api/invitation/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

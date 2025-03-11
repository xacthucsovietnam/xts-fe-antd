// src/api/bizUser/list.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ListBizUserItemDto } from '../../types/bizUser';

export const getBizUserList = async (
  page?: number,
  perpage?: number,
  q?: string,
  status?: number,
  role?: number
): Promise<Pagination<ListBizUserItemDto>> => {
  const params = { page, perpage, q, status, role };
  const response = await axios.get('/api/biz-user/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
}; 

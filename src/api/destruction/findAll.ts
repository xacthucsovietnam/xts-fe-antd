 // src/api/destruction/findAll.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ListDestructionDocItemDto } from '../../types/destruction';

export const findAllDestructions = async (
  page?: number,
  perpage?: number,
  fromDate?: string,
  toDate?: number,
  productId?: number
): Promise<Pagination<ListDestructionDocItemDto>> => {
  const params = { page, perpage, fromDate, toDate, productId };
  const response = await axios.get('/api/stamp/destruction/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

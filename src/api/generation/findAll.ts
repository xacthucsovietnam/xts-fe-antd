 // src/api/generation/findAll.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ListGenerationDocItemDto } from '../../types/generation';

export const findAllGenerations = async (
  page?: number,
  perpage?: number,
  fromDate?: string,
  toDate?: number,
  productId?: number
): Promise<Pagination<ListGenerationDocItemDto>> => {
  const params = { page, perpage, fromDate, toDate, productId };
  const response = await axios.get('/api/stamp/generation/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

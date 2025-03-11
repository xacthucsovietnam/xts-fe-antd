// src/api/activation/findAll.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ListActivationDocItemDto } from '../../types/activation';

export const findAllActivations = async (
  page?: number,
  perpage?: number,
  fromDate?: string,
  toDate?: number,
  productId?: number
): Promise<Pagination<ListActivationDocItemDto>> => {
  const params = { page, perpage, fromDate, toDate, productId };
  const response = await axios.get('/api/stamp/activation/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
// src/api/product/list.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ProductListItemDto } from '../../types/product';

export const getProductList = async (
  page?: number,
  perpage?: number,
  name?: string,
  status?: number
): Promise<Pagination<ProductListItemDto>> => {
  const params = { page, perpage, name, status };
  const response = await axios.get('/api/product/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
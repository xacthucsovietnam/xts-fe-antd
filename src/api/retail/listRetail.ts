 // src/api/retail/listRetail.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { ListRetailOrderItemDto } from '../../types/retail';

export interface ListRetailParams {
  page?: number;
  perpage?: number;
  fromDate?: string;
  toDate?: string;
  stampCode?: string;
}

export const listRetail = async (params: ListRetailParams): Promise<Pagination<ListRetailOrderItemDto>> => {
  const response = await axios.get('/api/stamp/retail/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data;
};

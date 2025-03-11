 // src/api/stampTemplate/list.ts
import axios from 'axios';
import { Pagination } from '../../types/common';
import { StampTemplateListItemDto } from '../../types/stampTemplate';

export const getStampTemplateList = async (
  page?: number,
  perpage?: number,
  name?: string,
  status?: number,
  size?: string
): Promise<Pagination<StampTemplateListItemDto>> => {
  const params = { page, perpage, name, status, size };
  const response = await axios.get('/api/stamp-template/list', {
    params,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

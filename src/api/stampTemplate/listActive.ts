  // src/api/stampTemplate/listActive.ts
import axios from 'axios';
import { StampTemplateListItemDto } from '../../types/stampTemplate';

export const getStampTemplateListActive = async (): Promise<StampTemplateListItemDto[]> => {
  const response = await axios.get('/api/stamp-template/list-active', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};


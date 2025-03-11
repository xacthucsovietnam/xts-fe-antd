 // src/api/stampTemplate/detail.ts
import axios from 'axios';
import { StampTemplateDetailDto } from '../../types/stampTemplate';

export const getStampTemplateDetail = async (id: string): Promise<StampTemplateDetailDto> => {
  const response = await axios.get(`/api/stamp-template/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

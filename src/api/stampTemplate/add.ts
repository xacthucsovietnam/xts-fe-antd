 // src/api/stampTemplate/add.ts
import axios from 'axios';
import { CreateStampTemplateDto, StampTemplateDetailDto } from '../../types/stampTemplate';

export const addStampTemplate = async (data: CreateStampTemplateDto): Promise<StampTemplateDetailDto> => {
  const response = await axios.post('/api/stamp-template/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

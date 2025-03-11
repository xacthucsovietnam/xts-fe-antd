 // src/api/stampTemplate/edit.ts
import axios from 'axios';
import { UpdateStampTemplateDto, StampTemplateDetailDto } from '../../types/stampTemplate';

export const editStampTemplate = async (id: string, data: UpdateStampTemplateDto): Promise<StampTemplateDetailDto> => {
  const response = await axios.post(`/api/stamp-template/edit/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

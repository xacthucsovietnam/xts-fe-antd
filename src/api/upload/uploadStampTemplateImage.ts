 // src/api/upload/uploadStampTemplateImage.ts
import axios from 'axios';
import { UploadOneDto } from '../../types/upload';
import { FileUploadResponseDto } from '../../types/upload';

export const uploadStampTemplateImage = async (data: UploadOneDto): Promise<FileUploadResponseDto[]> => {
  const formData = new FormData();
  formData.append('file', data.file);
  const response = await axios.post('/api/upload/stamp-template-image', formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

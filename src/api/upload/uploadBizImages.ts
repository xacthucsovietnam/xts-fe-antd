 // src/api/upload/uploadBizImages.ts
import axios from 'axios';
import { UploadMultipleDto } from '../../types/upload';
import { FileUploadResponseDto } from '../../types/upload';

export const uploadBizImages = async (data: UploadMultipleDto): Promise<FileUploadResponseDto[]> => {
  const formData = new FormData();
  data.files.forEach((file) => {
    formData.append('files', file);
  });
  const response = await axios.post('/api/upload/biz-images', formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

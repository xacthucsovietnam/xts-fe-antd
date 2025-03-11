 // src/api/upload/cloneBizResource.ts
import axios from 'axios';
import { CloneFileDto } from '../../types/upload';
import { CloneFileResponseDto } from '../../types/upload';

export const cloneBizResource = async (data: CloneFileDto): Promise<CloneFileResponseDto> => {
  const response = await axios.post('/api/upload/clone-biz-resource', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

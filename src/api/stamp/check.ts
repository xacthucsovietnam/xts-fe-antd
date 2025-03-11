 // src/api/stamp/check.ts
import axios from 'axios';
import { CheckStampDto, CheckStampResponseDto } from '../../types/stamp';

export const checkStamp = async (data: CheckStampDto): Promise<CheckStampResponseDto> => {
  const response = await axios.post('/api/stamp/check', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

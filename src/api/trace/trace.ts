// src/api/trace/trace.ts
import axios from 'axios';
import { TraceResponseDto } from '../../types/trace';

export const trace = async (code: string): Promise<TraceResponseDto> => {
  const response = await axios.get('/api/trace', {
    params: { code },
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data;
};
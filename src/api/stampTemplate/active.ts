// src/api/stampTemplate/active.ts
import axios from 'axios';
import { DefaultDataType } from '../../types/common';

export const activeStampTemplate = async (id: string): Promise<DefaultDataType> => {
  const response = await axios.post(`/api/stamp-template/active/${id}`, {}, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
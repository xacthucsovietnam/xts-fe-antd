// src/api/product/detail.ts
import axios from 'axios';
import { ProductDetailDto } from '../../types/product';

export const getProductDetail = async (id: string): Promise<ProductDetailDto> => {
  const response = await axios.get(`/api/product/detail/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
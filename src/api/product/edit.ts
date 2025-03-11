// src/api/product/edit.ts
import axios from 'axios';
import { UpdateProductDto } from '../../types/product';
import { ProductDetailDto } from '../../types/product';

export const editProduct = async (id: string, data: UpdateProductDto): Promise<ProductDetailDto> => {
  const response = await axios.post(`/api/product/edit/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};
 // src/api/product/add.ts
import axios from 'axios';
import { CreateProductDto } from '../../types/product';
import { ProductDetailDto } from '../../types/product';

export const addProduct = async (data: CreateProductDto): Promise<ProductDetailDto> => {
  const response = await axios.post('/api/product/add', data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

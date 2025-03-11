 // src/api/product/listActive.ts
import axios from 'axios';
import { ProductListActiveItemDto } from '../../types/product';

export const getProductListActive = async (): Promise<ProductListActiveItemDto[]> => {
  const response = await axios.get('/api/product/list-active', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

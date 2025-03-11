 // src/api/product/attributes.ts
import axios from 'axios';
import { ProductAttributeDto } from '../../types/product';

export const getProductAttributes = async (id: string): Promise<ProductAttributeDto[]> => {
  const response = await axios.get(`/api/product/attributes/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data.data; // Trích xuất data từ ResponseType
};

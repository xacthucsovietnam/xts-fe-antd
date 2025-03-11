 // src/types/retail.ts
import { ResponseType, Pagination } from './common';

// DetailRetailOrderStampDto
export interface DetailRetailOrderStampDto {
  bizStampId: number;
  stampId: number;
  stampCode: string;
  skuId: number;
  productId: number;
  productName: string;
}

// DetailRetailOrderDto
export interface DetailRetailOrderDto {
  id: number;
  quantity: number;
  createdAt: string;
  createdBy: string;
  stamps: DetailRetailOrderStampDto[];
}

// CreateRetailDto
export interface CreateRetailDto {
  note: string;
  bizStampIds: string[];
}

// ListRetailOrderItemDto
export interface ListRetailOrderItemDto {
  id: number;
  quantity: number;
  createdAt: string;
  createdBy: string;
}

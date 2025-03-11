// src/types/activation.ts
import { ProductAttributeDto } from './product';
import { ResponseType } from './common'; // Import từ common.ts

// CreateActivationDocDto
export interface CreateActivationDocDto {
  productId: number;
  activationAttributes: CreateActivationProductAttributeDto[];
  bizStampIds: string[];
  note?: string;
}

// CreateActivationProductAttributeDto
export interface CreateActivationProductAttributeDto {
  attributeId: number;
  value: string;
}

// DetailActivationDocStampDto
export interface DetailActivationDocStampDto {
  bizStampId: number;
  stampId: number;
  stampCode: string;
  number: number;
}

// DetailActivationDocDto
export interface DetailActivationDocDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
  stamps: DetailActivationDocStampDto[];
}

// ListActivationDocItemDto
export interface ListActivationDocItemDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
}
 // src/types/generation.ts
import { ResponseType } from './common';

// CreateGenerationDocDto
export interface CreateGenerationDocDto {
  productId: number;
  quantity: number;
  bizStampIds: string[];
  note?: string;
}

// DetailGenerationDocStampDto
export interface DetailGenerationDocStampDto {
  bizStampId: number;
  stampId: number;
  stampCode: string;
  number: number;
}

// DetailGenerationDocDto
export interface DetailGenerationDocDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
  stamps: DetailGenerationDocStampDto[];
}

// ListGenerationDocItemDto
export interface ListGenerationDocItemDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
}

 // src/types/destruction.ts
import { ResponseType } from './common';

// CreateDestructionDocDto
export interface CreateDestructionDocDto {
  productId: number;
  quantity: number;
  bizStampIds: string[];
  note?: string;
}

// DetailDestructionDocStampDto
export interface DetailDestructionDocStampDto {
  bizStampId: number;
  stampId: number;
  stampCode: string;
  number: number;
}

// DetailDestructionDocDto
export interface DetailDestructionDocDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
  stamps: DetailDestructionDocStampDto[];
}

// ListDestructionDocItemDto
export interface ListDestructionDocItemDto {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  createdAt: string;
  createdBy: string;
}

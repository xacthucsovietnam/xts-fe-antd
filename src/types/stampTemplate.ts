// src/types/stampTemplate.ts
import { ResponseType } from './common';

// STAMP_TEMPLATE_SIZE
export enum STAMP_TEMPLATE_SIZE {
  '15x15-6' = '15x15-6',
  '25x15-4' = '25x15-4',
  '35x22-3' = '35x22-3',
  '46x34-2' = '46x34-2',
  '15x15-4' = '15x15-4',
  '20x20-3' = '20x20-3',
  '30x30-2' = '30x30-2',
  '25x15-3' = '25x15-3',
  '35x22-2' = '35x22-2',
}

// STAMP_TEMPLATE_STATUS
export enum STAMP_TEMPLATE_STATUS {
  ACTIVE = 1,
  INACTIVE = 2,
}

// STAMP_TEMPLATE_DISPLAY_MODE
export enum STAMP_TEMPLATE_DISPLAY_MODE {
  USE_IMAGE = 1,
  USE_DATE = 2,
}

// StampTemplateDetailDto
export interface StampTemplateDetailDto {
  id: number;
  name: string;
  size: STAMP_TEMPLATE_SIZE;
  status: STAMP_TEMPLATE_STATUS;
  topText: string;
  bottomText: string;
  centerText: string;
  displayMode: STAMP_TEMPLATE_DISPLAY_MODE;
  image: string;
  useExpiredDate: number;
  useActivationDate: number;
  createdAt: string;
  updatedAt: string;
  created_by: string;
}

// CreateStampTemplateDto
export interface CreateStampTemplateDto {
  name: string;
  size: STAMP_TEMPLATE_SIZE;
  topText: string;
  bottomText: string;
  centerText: string;
  displayMode: STAMP_TEMPLATE_DISPLAY_MODE;
  image: string;
  useExpiredDate: number;
  useActivationDate: number;
}

// StampTemplateListItemDto
export interface StampTemplateListItemDto {
  id: number;
  name: string;
  status: STAMP_TEMPLATE_STATUS;
  size: STAMP_TEMPLATE_SIZE;
  topText: string;
  bottomText: string;
  centerText: string;
  displayMode: STAMP_TEMPLATE_DISPLAY_MODE;
  image: string;
  useExpiredDate: number;
  useActivationDate: number;
  createdAt: string;
  updatedAt: string;
  created_by: string;
}

// UpdateStampTemplateDto
export interface UpdateStampTemplateDto {
  id: number;
  name: string;
  size: STAMP_TEMPLATE_SIZE;
  topText: string;
  bottomText: string;
  centerText: string;
  displayMode: STAMP_TEMPLATE_DISPLAY_MODE;
  image: string;
  useExpiredDate: number;
  useActivationDate: number;
}
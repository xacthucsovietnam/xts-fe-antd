// src/types/product.ts
import { ResponseType } from './common';

// PRODUCT_ATTRIBUTE_TYPE
export enum PRODUCT_ATTRIBUTE_TYPE {
  PRODUCT = 1,
  ACTIVATION = 2,
  SALE = 3,
}

// ProductAttributeDto
export interface ProductAttributeDto {
  id: number;
  type: PRODUCT_ATTRIBUTE_TYPE;
  name: string;
  value: string;
  unit: string;
  isRequired: number;
}

// PRODUCT_EXPIRE_EXCHANGE_UNIT
export enum PRODUCT_EXPIRE_EXCHANGE_UNIT {
  HOURS = 1,
  DAYS = 2,
  WEEKS = 3,
  MONTHS = 4,
}

// CreateProductAttributeDto
export interface CreateProductAttributeDto {
  type: PRODUCT_ATTRIBUTE_TYPE;
  name: string;
  value: string;
  unit: string;
}

// CreateProductDto
export interface CreateProductDto {
  name: string;
  price: number;
  gtin: string;
  hsCode: string;
  autoActivationSeconds: number;
  autoSaleSeconds: number;
  autoExpireSeconds: number;
  autoExpireExchangeUnit: PRODUCT_EXPIRE_EXCHANGE_UNIT;
  youtubeLink: string;
  content: string;
  description: string;
  slideImages: string[];
  introImages: string[];
  attributes: CreateProductAttributeDto[];
}

// ProductListItemDto
export interface ProductListItemDto {
  id: number;
  name: string;
  gtin: string;
  publicCode: string;
  price: number;
  status: number;
  hsCode: string;
  createdAt: string;
  updatedAt: string;
  created_by: string;
}

// ProductListActiveItemDto
export interface ProductListActiveItemDto {
  id: number;
  name: string;
  gtin: string;
  publicCode: string;
}

// UpdateProductAttributeDto
export interface UpdateProductAttributeDto {
  id: number;
  type: PRODUCT_ATTRIBUTE_TYPE;
  name: string;
  value: string;
  unit: string;
}

// UpdateProductDto
export interface UpdateProductDto {
  id: number;
  name: string;
  price: number;
  gtin: string;
  hsCode: string;
  autoActivationSeconds: number;
  autoSaleSeconds: number;
  autoExpireSeconds: number;
  autoExpireExchangeUnit: PRODUCT_EXPIRE_EXCHANGE_UNIT;
  youtubeLink: string;
  content: string;
  description: string;
  slideImages: string[];
  introImages: string[];
  attributes: UpdateProductAttributeDto[];
}

// ProductDetailDto
export interface ProductDetailDto {
  id: number;
  name: string;
  price: number;
  publicCode: string;
  gtin: string;
  hsCode: string;
  status: number;
  autoActivationSeconds: number;
  autoSaleSeconds: number;
  autoExpireSeconds: number;
  autoExpireExchangeUnit: PRODUCT_EXPIRE_EXCHANGE_UNIT;
  youtubeLink: string;
  content: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  slideImages: string[];
  introImages: string[];
  attributes: ProductAttributeDto[];
}
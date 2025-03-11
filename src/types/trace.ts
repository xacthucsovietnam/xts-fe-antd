 // src/types/trace.ts
import { ResponseType } from './common';
import { ProductAttributeDto } from './product';

// StampInfo
export interface StampInfo {
  biz_stamp_id: number;
  stamp_id: number;
  stamp_code: string;
  biz_count_number: number;
  state: number; // GENERATED: 1, ACTIVATED: 2, RETAILED: 3, DESTROYED: 4
  display_mode: number; // showImage: 1, showDate: 2
  size: string;
  top_text: string;
  bottom_text: string;
  center_text: string;
  image: string;
  use_expired_date: number;
  use_activation_date: number;
}

// ProductInfo
export interface ProductInfo {
  product_id: number;
  sku_id: number;
  name: string;
  public_code: string;
  gtin: string;
  hs_code: string;
  activation_datetime: string;
  expiration_datetime: string;
  attributes: ProductAttributeDto[];
}

// TraceBizInfo
export interface TraceBizInfo {
  id: number;
  type: number;
  code: string;
  name: string;
  short_name: string;
  full_name: string;
}

// StampEventDto
export interface StampEventDto {
  event_id: number;
  event_date: string;
  biz_step: number; // GENERATION: 1, ACTIVATION: 2, RETAIL: 3, DESTRUCTION: 4
}

// TraceResponseDto
export interface TraceResponseDto {
  stamp: StampInfo;
  product: ProductInfo;
  biz: TraceBizInfo;
  events: StampEventDto[];
}

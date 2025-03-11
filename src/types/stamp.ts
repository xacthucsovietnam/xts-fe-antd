// src/types/stamp.ts
import { ResponseType } from './common';

// CHECK_STAMP_MODE
export enum CHECK_STAMP_MODE {
  SINGLE = 'single',
  RANGE = 'range',
}

// CHECK_STAMP_TYPE
export enum CHECK_STAMP_TYPE {
  CODE = 'code',
  BIZ_COUNT_NUMBER = 'bizCountNumber',
}

// CHECK_STAMP_TARGET_STATE
export enum CHECK_STAMP_TARGET_STATE {
  ACTIVATION = 'activation',
  RETAIL = 'retail',
  DESTROY = 'destroy',
}

// CheckStampResponseItemDto
export interface CheckStampResponseItemDto {
  bizStampId: string;
  code: string;
  number: number;
  isValid: boolean;
  message: string;
}

// CheckStampResponseDto
export interface CheckStampResponseDto {
  total: number;
  valid: number;
  inValid: number;
  items: CheckStampResponseItemDto[];
}

// CheckStampDto
export interface CheckStampDto {
  mode: CHECK_STAMP_MODE;
  type: CHECK_STAMP_TYPE;
  targetState: CHECK_STAMP_TARGET_STATE;
  codes: string[];
  start: string;
  end: string;
}
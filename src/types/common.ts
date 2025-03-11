// src/types/common.ts
export interface ResponseType<T = any> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
  httpStatus: number;
  messageCode?: string;
}

export interface DefaultDataType {
  [key: string]: any; // Giả định là object trống
}

export interface PaginationInfo {
  page: number;
  perpage: number;
  totalPages: number;
  totalItems: number;
}

export interface Pagination<T> {
  items: T[];
  pagination: PaginationInfo;
}
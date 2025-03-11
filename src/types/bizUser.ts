// src/types/bizUser.ts
import { ResponseType, DefaultDataType } from './common';

// ListBizUserItemDto
export interface ListBizUserItemDto {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: number;
  role: number;
  createdAt: string;
  createdBy: string;
}

// BIZ_USER_ROLE (enum từ swagger.json)
export enum BIZ_USER_ROLE {
  OWNER = 1,
  USER = 2,
}

// ChangeRoleDto
export interface ChangeRoleDto {
  bizUserId: number;
  role: BIZ_USER_ROLE;
}
 // src/types/invitation.ts
import { ResponseType, DefaultDataType } from './common';

// SendInvitationDto
export interface SendInvitationDto {
  email: string;
  bizId: number;
  role: number;
}

// InvitationItemDto
export interface InvitationItemDto {
  id: number;
  email: string;
  bizId: number;
  bizName: string;
  role: number;
  status: number;
  createdAt: string;
  createdBy: string;
}

// InvitationDetailDto
export interface InvitationDetailDto {
  id: number;
  email: string;
  bizId: number;
  bizName: string;
  role: number;
  status: number;
  createdAt: string;
  createdBy: string;
}

// INVITATION_STATUS (enum từ swagger.json)
export enum INVITATION_STATUS {
  SUCCESS = 1,
  ERROR = 2,
}

// INVITATION_ROLE (enum từ swagger.json)
export enum INVITATION_ROLE {
  OWNER = 1,
  USER = 2,
}

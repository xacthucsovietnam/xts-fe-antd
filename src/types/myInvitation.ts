 // src/types/myInvitation.ts
import { ResponseType, DefaultDataType } from './common';

// MyInvitationItemDto
export interface MyInvitationItemDto {
  id: number;
  bizId: number;
  bizName: string;
  role: number;
  status: number;
  createdAt: string;
  createdBy: string;
}

// MyInvitationDetailDto
export interface MyInvitationDetailDto {
  id: number;
  bizId: number;
  bizName: string;
  role: number;
  status: number;
  createdAt: string;
  createdBy: string;
}

// MY_INVITATION_STATUS (enum từ swagger.json)
export enum MY_INVITATION_STATUS {
  PENDING = 1,
  ACCEPTED = 2,
  REJECTED = 3,
}

// MY_INVITATION_ROLE (enum từ swagger.json)
export enum MY_INVITATION_ROLE {
  OWNER = 1,
  USER = 2,
}

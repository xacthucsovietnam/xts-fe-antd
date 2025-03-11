import { ResponseType } from '../types/common';

export interface BizDto {
  id: number;
  name: string;
  logo: string;
  role: number;
}

export interface CurrentUserDto {
  id: number;
  status: number;
  email: string | null;
  phone: string | null;
  full_name: string;
  gender: number | null;
  province_code: number | null;
  district_code: number | null;
  ward_code: number | null;
  address_detail: string | null;
  address_full: string | null;
  avatar: string | null;
  date_of_birth: string | null;
  identification_number: string | null;
  identification_issued_place: string | null;
  identification_issued_date: string | null;
  biz_id: string | null;
  biz_name: string | null;
  biz_logo: string | null;
  biz_role: number | null;
  managed_bizs: BizDto[];
}

export interface UpdateProfileDto {
  gender?: number;
  email?: string;
  dateOfBirth?: string;
  fullName?: string;
  provinceCode?: string;
  districtCode?: string;
  wardCode?: string;
  addressDetail?: string;
  identificationNumber?: string;
  identificationIssuedPlace?: string;
  identificationIssuedDate?: string;
  avatarUpload?: File; // File object cho upload
}

export type CurrentUserResponse = ResponseType<CurrentUserDto>;
export type UpdateProfileResponse = ResponseType<UpdateProfileDto>;
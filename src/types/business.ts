 // src/types/business.ts
import { ResponseType, DefaultDataType } from './common';

// BusinessItemDto
export interface BusinessItemDto {
  id: number;
  role: number;
  code: string;
  name: string;
  type: number;
  phone: string;
  email: string;
  addressFull: string;
  logo: string;
  shortName: string;
  fullName: string;
  website: string;
  youtube: string;
}

// DetailBusinessDto
export interface DetailBusinessDto {
  id: number;
  name: string;
  type: number;
  phone: string;
  email: string;
  gcp: string;
  taxCode: string;
  businessRegistrationIssuedDate: string;
  businessRegistrationIssuedPlace: string;
  provinceCode: string;
  districtCode: string;
  wardCode: string;
  addressDetail: string;
  addressFull: string;
  logo: string;
  shortName: string;
  fullName: string;
  code: string;
  content: string;
  website: string;
  youtube: string;
  createdBy: string;
  slideImages: string[];
  introImages: string[];
  businessRegistrationScans: string[];
}

// BUSINESS_TYPE (enum từ swagger.json)
export enum BUSINESS_TYPE {
  INDIVIDUAL = 1,
  LEGAL_ENTITY = 2,
}

// CreateBusinessDto
export interface CreateBusinessDto {
  name: string;
  type: BUSINESS_TYPE;
  phone: string;
  email: string;
  gcp: string;
  taxCode: string;
  businessRegistrationIssuedDate: string;
  businessRegistrationIssuedPlace: string;
  provinceCode: string;
  districtCode: string;
  wardCode: string;
  addressDetail: string;
  logoUpload: any[]; // Giả định là mảng file upload (multipart/form-data)
}

// UpdateBusinessDto
export interface UpdateBusinessDto {
  name: string;
  type: BUSINESS_TYPE;
  shortName: string;
  fullName: string;
  phone: string;
  email: string;
  gcp: string;
  taxCode: string;
  businessRegistrationIssuedDate: string;
  businessRegistrationIssuedPlace: string;
  provinceCode: string;
  districtCode: string;
  wardCode: string;
  addressDetail: string;
  website: string;
  youtube: string;
  content: string;
  logo: string;
  slideImages: string[];
  introImages: string[];
  businessRegistrationScans: string[];
}

// src/types/upload.ts
import { ResponseType } from './common';

// FileUploadResponseDto
export interface FileUploadResponseDto {
  url: string;
  name: string;
}

// UploadMultipleDto
export interface UploadMultipleDto {
  files: File[]; // Array of files to upload
}

// UploadOneDto
export interface UploadOneDto {
  file: File; // Single file to upload
}

// CloneFileItemDto
export interface CloneFileItemDto {
  fromUrl: string;
  url: string;
  name: string;
}

// CloneFileResponseDto
export interface CloneFileResponseDto {
  items: CloneFileItemDto[];
}

// CloneFileDto
export interface CloneFileDto {
  urls: string[]; // Array of URLs to clone
}

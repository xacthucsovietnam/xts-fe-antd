// src/query/upload.ts
import { useMutation } from '@tanstack/react-query';
import {
  uploadBizImages,
  uploadStampTemplateImage,
  cloneBizResource,
} from '../api/upload';
import { QUERY_KEYS } from './queryKeys';
import {
  UploadMultipleDto,
  UploadOneDto,
  CloneFileDto,
} from '../types/upload';
import { FileUploadResponseDto, CloneFileResponseDto } from '../types/upload';

export const useUploadBizImages = () => {
  return useMutation<FileUploadResponseDto[], Error, UploadMultipleDto>({
    mutationKey: QUERY_KEYS.UPLOAD.BIZ_IMAGES,
    mutationFn: (data: UploadMultipleDto) => uploadBizImages(data),
  });
};

export const useUploadStampTemplateImage = () => {
  return useMutation<FileUploadResponseDto[], Error, UploadOneDto>({
    mutationKey: QUERY_KEYS.UPLOAD.STAMP_TEMPLATE_IMAGE,
    mutationFn: (data: UploadOneDto) => uploadStampTemplateImage(data),
  });
};

export const useCloneBizResource = () => {
  return useMutation<CloneFileResponseDto, Error, CloneFileDto>({
    mutationKey: QUERY_KEYS.UPLOAD.CLONE_BIZ_RESOURCE,
    mutationFn: (data: CloneFileDto) => cloneBizResource(data),
  });
};

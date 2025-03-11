// src/query/stampTemplate.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  addStampTemplate,
  getStampTemplateList,
  getStampTemplateListActive,
  getStampTemplateDetail,
  editStampTemplate,
  activeStampTemplate,
  inactiveStampTemplate,
} from '../api/stampTemplate';
import { QUERY_KEYS } from './queryKeys';
import {
  CreateStampTemplateDto,
  StampTemplateDetailDto,
  StampTemplateListItemDto,
  UpdateStampTemplateDto,
} from '../types/stampTemplate';
import { DefaultDataType, Pagination } from '../types/common';

export const useAddStampTemplate = () => {
  return useMutation<StampTemplateDetailDto, Error, CreateStampTemplateDto>({
    mutationKey: QUERY_KEYS.STAMP_TEMPLATE.ADD,
    mutationFn: (data: CreateStampTemplateDto) => addStampTemplate(data),
  });
};

export const useGetStampTemplateList = (page?: number, perpage?: number, name?: string, status?: number, size?: string) => {
  return useQuery<Pagination<StampTemplateListItemDto>, Error>({
    queryKey: [QUERY_KEYS.STAMP_TEMPLATE.LIST, { page, perpage, name, status, size }],
    queryFn: () => getStampTemplateList(page, perpage, name, status, size),
  });
};

export const useGetStampTemplateListActive = () => {
  return useQuery<StampTemplateListItemDto[], Error>({
    queryKey: QUERY_KEYS.STAMP_TEMPLATE.LIST_ACTIVE,
    queryFn: getStampTemplateListActive,
  });
};

export const useGetStampTemplateDetail = (id: string) => {
  return useQuery<StampTemplateDetailDto, Error>({
    queryKey: [QUERY_KEYS.STAMP_TEMPLATE.DETAIL, id],
    queryFn: () => getStampTemplateDetail(id),
  });
};

export const useEditStampTemplate = () => {
  return useMutation<StampTemplateDetailDto, Error, { id: string; data: UpdateStampTemplateDto }>({
    mutationKey: QUERY_KEYS.STAMP_TEMPLATE.EDIT,
    mutationFn: ({ id, data }) => editStampTemplate(id, data),
  });
};

export const useActiveStampTemplate = () => {
  return useMutation<DefaultDataType, Error, string>({
    mutationKey: QUERY_KEYS.STAMP_TEMPLATE.ACTIVE,
    mutationFn: (id: string) => activeStampTemplate(id),
  });
};

export const useInactiveStampTemplate = () => {
  return useMutation<DefaultDataType, Error, string>({
    mutationKey: QUERY_KEYS.STAMP_TEMPLATE.INACTIVE,
    mutationFn: (id: string) => inactiveStampTemplate(id),
  });
};
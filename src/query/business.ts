 // src/query/business.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { getBusinessList, getCurrentBusiness, createBusiness, updateBusiness } from '../api/business';
import { QUERY_KEYS } from './queryKeys';
import { BusinessItemDto, DetailBusinessDto, CreateBusinessDto, UpdateBusinessDto } from '../types/business';
import { Pagination } from '../types/common';

export const useGetBusinessList = () => {
  return useQuery<Pagination<BusinessItemDto>, Error>({
    queryKey: QUERY_KEYS.BUSINESS.LIST,
    queryFn: getBusinessList,
  });
};

export const useGetCurrentBusiness = () => {
  return useQuery<DetailBusinessDto, Error>({
    queryKey: QUERY_KEYS.BUSINESS.CURRENT,
    queryFn: getCurrentBusiness,
  });
};

export const useCreateBusiness = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.BUSINESS.CREATE,
    mutationFn: (data: CreateBusinessDto) => createBusiness(data),
  });
};

export const useUpdateBusiness = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.BUSINESS.UPDATE,
    mutationFn: (data: UpdateBusinessDto) => updateBusiness(data),
  });
};

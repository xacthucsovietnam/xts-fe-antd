// src/query/retail.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { createRetail, listRetail, getRetailDetail, ListRetailParams } from '../api/retail';
import { QUERY_KEYS } from './queryKeys';
import { CreateRetailDto, DetailRetailOrderDto, ListRetailOrderItemDto } from '../types/retail';
import { Pagination } from '../types/common';

export const useCreateRetail = () => {
  return useMutation<DetailRetailOrderDto, Error, CreateRetailDto>({
    mutationKey: QUERY_KEYS.RETAIL.CREATE,
    mutationFn: (data: CreateRetailDto) => createRetail(data),
  });
};

export const useListRetail = (params: ListRetailParams) => {
  return useQuery<Pagination<ListRetailOrderItemDto>, Error>({
    queryKey: QUERY_KEYS.RETAIL.LIST(params),
    queryFn: () => listRetail(params),
  });
};

export const useGetRetailDetail = (id: string) => {
  return useQuery<DetailRetailOrderDto, Error>({
    queryKey: QUERY_KEYS.RETAIL.DETAIL(id),
    queryFn: () => getRetailDetail(id),
  });
};
// src/query/activation.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { createActivation, findAllActivations, findOneActivation } from '../api/activation';
import { QUERY_KEYS } from './queryKeys';
import { CreateActivationDocDto, DetailActivationDocDto, ListActivationDocItemDto } from '../types/activation';
import { Pagination } from '../types/common';

export const useCreateActivation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.ACTIVATION.CREATE,
    mutationFn: (data: CreateActivationDocDto) => createActivation(data),
  });
};

export const useFindAllActivations = (page?: number, perpage?: number, fromDate?: string, toDate?: number, productId?: number) => {
  return useQuery<Pagination<ListActivationDocItemDto>, Error>({
    queryKey: [QUERY_KEYS.ACTIVATION.LIST, { page, perpage, fromDate, toDate, productId }],
    queryFn: () => findAllActivations(page, perpage, fromDate, toDate, productId),
  });
};

export const useFindOneActivation = (id: string) => {
  return useQuery<DetailActivationDocDto, Error>({
    queryKey: [QUERY_KEYS.ACTIVATION.DETAIL, id],
    queryFn: () => findOneActivation(id),
  });
};
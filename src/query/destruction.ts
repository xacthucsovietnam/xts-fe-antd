 // src/query/destruction.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { createDestruction, findAllDestructions, findOneDestruction } from '../api/destruction';
import { QUERY_KEYS } from './queryKeys';
import { Pagination } from '../types/common';
import { CreateDestructionDocDto, ListDestructionDocItemDto, DetailDestructionDocDto } from '../types/destruction';

export const useCreateDestruction = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DESTRUCTION.CREATE,
    mutationFn: (data: CreateDestructionDocDto) => createDestruction(data),
  });
};

export const useFindAllDestructions = (
  page?: number,
  perpage?: number,
  fromDate?: string,
  toDate?: number,
  productId?: number
) => {
  return useQuery<Pagination<ListDestructionDocItemDto>, Error>({
    queryKey: [QUERY_KEYS.DESTRUCTION.LIST, { page, perpage, fromDate, toDate, productId }],
    queryFn: () => findAllDestructions(page, perpage, fromDate, toDate, productId),
  });
};

export const useFindOneDestruction = (id: string) => {
  return useQuery<DetailDestructionDocDto, Error>({
    queryKey: [QUERY_KEYS.DESTRUCTION.DETAIL, id],
    queryFn: () => findOneDestruction(id),
  });
};

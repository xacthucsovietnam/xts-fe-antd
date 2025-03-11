 // src/query/generation.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { createGeneration, findAllGenerations, findOneGeneration } from '../api/generation';
import { QUERY_KEYS } from './queryKeys';
import { Pagination } from '../types/common';
import { CreateGenerationDocDto, ListGenerationDocItemDto, DetailGenerationDocDto } from '../types/generation';

export const useCreateGeneration = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.GENERATION.CREATE,
    mutationFn: (data: CreateGenerationDocDto) => createGeneration(data),
  });
};

export const useFindAllGenerations = (
  page?: number,
  perpage?: number,
  fromDate?: string,
  toDate?: number,
  productId?: number
) => {
  return useQuery<Pagination<ListGenerationDocItemDto>, Error>({
    queryKey: [QUERY_KEYS.GENERATION.LIST, { page, perpage, fromDate, toDate, productId }],
    queryFn: () => findAllGenerations(page, perpage, fromDate, toDate, productId),
  });
};

export const useFindOneGeneration = (id: string) => {
  return useQuery<DetailGenerationDocDto, Error>({
    queryKey: [QUERY_KEYS.GENERATION.DETAIL, id],
    queryFn: () => findOneGeneration(id),
  });
};

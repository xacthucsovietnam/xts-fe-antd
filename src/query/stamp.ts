// src/query/stamp.ts
import { useMutation } from '@tanstack/react-query';
import { checkStamp } from '../api/stamp';
import { QUERY_KEYS } from './queryKeys';
import { CheckStampDto, CheckStampResponseDto } from '../types/stamp';

export const useCheckStamp = () => {
  return useMutation<CheckStampResponseDto, Error, CheckStampDto>({
    mutationKey: QUERY_KEYS.STAMP.CHECK,
    mutationFn: (data: CheckStampDto) => checkStamp(data),
  });
};
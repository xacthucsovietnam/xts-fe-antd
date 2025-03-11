 // src/query/trace.ts
import { useQuery } from '@tanstack/react-query';
import { trace } from '../api/trace';
import { QUERY_KEYS } from './queryKeys';
import { TraceResponseDto } from '../types/trace';

export const useTrace = (code: string) => {
  return useQuery<TraceResponseDto, Error>({
    queryKey: QUERY_KEYS.TRACE.TRACE(code),
    queryFn: () => trace(code),
  });
};

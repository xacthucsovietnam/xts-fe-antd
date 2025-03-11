import { useMutation, useQuery } from '@tanstack/react-query';
import { getCurrentUser, updateProfile } from '../api';
import { QUERY_KEYS } from './queryKeys';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
    enabled: false, // Chỉ gọi API khi cần
  });
};
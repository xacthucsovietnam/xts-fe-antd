// src/query/bizUser.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { getBizUserList, findOneBizUser, lockBizUser, unlockBizUser, changeRole } from '../api/bizUser';
import { QUERY_KEYS } from './queryKeys';
import { ListBizUserItemDto, ChangeRoleDto } from '../types/bizUser';
import { Pagination } from '../types/common';

export const useGetBizUserList = (page?: number, perpage?: number, q?: string, status?: number, role?: number) => {
  return useQuery<Pagination<ListBizUserItemDto>, Error>({
    queryKey: [QUERY_KEYS.BIZUSER.LIST, { page, perpage, q, status, role }],
    queryFn: () => getBizUserList(page, perpage, q, status, role),
  });
};

export const useFindOneBizUser = (id: string) => {
  return useQuery<ListBizUserItemDto, Error>({
    queryKey: [QUERY_KEYS.BIZUSER.DETAIL, id],
    queryFn: () => findOneBizUser(id),
  });
};

export const useLockBizUser = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.BIZUSER.LOCK,
    mutationFn: (id: string) => lockBizUser(id),
  });
};

export const useUnlockBizUser = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.BIZUSER.UNLOCK,
    mutationFn: (id: string) => unlockBizUser(id),
  });
};

export const useChangeRole = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.BIZUSER.CHANGE_ROLE,
    mutationFn: (data: ChangeRoleDto) => changeRole(data),
  });
};
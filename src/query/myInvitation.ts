// src/query/myInvitation.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { getMyInvitationList, getMyInvitationDetail, acceptMyInvitation, rejectMyInvitation } from '../api/myInvitation';
import { QUERY_KEYS } from './queryKeys';
import { Pagination } from '../types/common';
import { MyInvitationItemDto, MyInvitationDetailDto } from '../types/myInvitation';

export const useGetMyInvitationList = (page?: number, perpage?: number, status?: number) => {
  return useQuery<Pagination<MyInvitationItemDto>, Error>({
    queryKey: [QUERY_KEYS.MYINVITATION.LIST, { page, perpage, status }],
    queryFn: () => getMyInvitationList(page, perpage, status),
  });
};

export const useGetMyInvitationDetail = (id: string) => {
  return useQuery<MyInvitationDetailDto, Error>({
    queryKey: [QUERY_KEYS.MYINVITATION.DETAIL, id],
    queryFn: () => getMyInvitationDetail(id),
  });
};

export const useAcceptMyInvitation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.MYINVITATION.ACCEPT,
    mutationFn: (id: string) => acceptMyInvitation(id),
  });
};

export const useRejectMyInvitation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.MYINVITATION.REJECT,
    mutationFn: (id: string) => rejectMyInvitation(id),
  });
};

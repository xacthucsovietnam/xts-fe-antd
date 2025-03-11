// src/query/invitation.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendInvitation, getInvitationList, getInvitationDetail, cancelInvitation } from '../api/invitation';
import { QUERY_KEYS } from './queryKeys';
import { Pagination } from '../types/common';
import { SendInvitationDto, InvitationItemDto, InvitationDetailDto } from '../types/invitation';

export const useSendInvitation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.INVITATION.SEND,
    mutationFn: (data: SendInvitationDto) => sendInvitation(data),
  });
};

export const useGetInvitationList = (page?: number, perpage?: number, status?: number) => {
  return useQuery<Pagination<InvitationItemDto>, Error>({
    queryKey: [QUERY_KEYS.INVITATION.LIST, { page, perpage, status }],
    queryFn: () => getInvitationList(page, perpage, status),
  });
};

export const useGetInvitationDetail = (id: string) => {
  return useQuery<InvitationDetailDto, Error>({
    queryKey: [QUERY_KEYS.INVITATION.DETAIL, id],
    queryFn: () => getInvitationDetail(id),
  });
};

export const useCancelInvitation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.INVITATION.CANCEL,
    mutationFn: (id: string) => cancelInvitation(id),
  });
};
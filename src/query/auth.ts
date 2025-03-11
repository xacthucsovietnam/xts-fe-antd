import { useMutation, useQuery } from '@tanstack/react-query';
import { loginWithPassword, getZaloAuthUrl, loginWithZalo, signUpWithPassword, refreshTokens } from '../api/auth';
import { QUERY_KEYS } from './queryKeys';

export const useLoginWithPassword = () => {
  return useMutation({
    mutationFn: loginWithPassword,
  });
};

export const useGetZaloAuthUrl = () => {
  return useMutation({
    mutationFn: getZaloAuthUrl,
  });
};

export const useLoginWithZalo = () => {
  return useMutation({
    mutationFn: loginWithZalo,
  });
};

export const useSignUpWithPassword = () => {
  return useMutation({
    mutationFn: signUpWithPassword,
  });
};

export const useRefreshTokens = () => {
  return useMutation({
    mutationFn: refreshTokens,
  });
};
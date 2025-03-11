import { ResponseType } from '../types/common';

export interface LoginWithPasswordDto {
  identifier: string;
  password: string;
}

export interface AuthResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface LoginWithZaloDto {
  authorization_code: string;
  code_challenge: string;
}

export interface GetZaloLoginUrlResponseDto {
  url: string;
}

export interface SignUpWithPasswordDto {
  phone: string;
  password: string;
  passwordConfirm: string;
}

export type SignUpResponse = ResponseType<AuthResponseDto>;
export type LoginResponse = ResponseType<AuthResponseDto>;
export type ZaloAuthUrlResponse = ResponseType<GetZaloLoginUrlResponseDto>;
export type ZaloLoginResponse = ResponseType<AuthResponseDto>;
export interface RefreshResponse extends ResponseType<AuthResponseDto> {}

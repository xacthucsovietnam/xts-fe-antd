import axiosClient from './axiosClient';
import { AddressItem } from '../types/location';

export const getProvinces = async (): Promise<AddressItem[]> => {
  const response = await axiosClient.get('/api/location/provinces');
  return response.data.data;
};

export const getDistricts = async (provinceCode: string): Promise<AddressItem[]> => {
  const response = await axiosClient.get('/api/location/districts', {
    params: { provinceCode },
  });
  return response.data.data;
};

export const getWards = async (districtCode: string): Promise<AddressItem[]> => {
  const response = await axiosClient.get('/api/location/wards', {
    params: { districtCode },
  });
  return response.data.data;
};
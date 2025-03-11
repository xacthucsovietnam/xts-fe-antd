import { useQuery } from '@tanstack/react-query';
import { getProvinces, getDistricts, getWards } from '../api/location';
import { AddressItem } from '../types/location';

export const useProvincesQuery = () => {
  return useQuery<AddressItem[], Error>({
    queryKey: ['provinces'],
    queryFn: getProvinces,
    staleTime: Infinity,
  });
};

export const useDistrictsQuery = (provinceCode: string) => {
  return useQuery<AddressItem[], Error>({
    queryKey: ['districts', provinceCode],
    queryFn: () => getDistricts(provinceCode),
    enabled: !!provinceCode,
    staleTime: Infinity,
  });
};

export const useWardsQuery = (districtCode: string) => {
  return useQuery<AddressItem[], Error>({
    queryKey: ['wards', districtCode],
    queryFn: () => getWards(districtCode),
    enabled: !!districtCode,
    staleTime: Infinity,
  });
};
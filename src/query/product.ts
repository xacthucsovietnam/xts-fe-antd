// src/query/product.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { addProduct, getProductList, getProductListActive, getProductDetail, editProduct, getProductAttributes } from '../api/product';
import { QUERY_KEYS } from './queryKeys';
import { Pagination } from '../types/common';
import { CreateProductDto, ProductListItemDto, ProductListActiveItemDto, ProductDetailDto, UpdateProductDto, ProductAttributeDto } from '../types/product';

export const useAddProduct = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PRODUCT.ADD,
    mutationFn: (data: CreateProductDto) => addProduct(data),
  });
};

export const useGetProductList = (page?: number, perpage?: number, name?: string, status?: number) => {
  return useQuery<Pagination<ProductListItemDto>, Error>({
    queryKey: [QUERY_KEYS.PRODUCT.LIST, { page, perpage, name, status }],
    queryFn: () => getProductList(page, perpage, name, status),
  });
};

export const useGetProductListActive = () => {
  return useQuery<ProductListActiveItemDto[], Error>({
    queryKey: QUERY_KEYS.PRODUCT.LIST_ACTIVE,
    queryFn: getProductListActive,
  });
};

export const useGetProductDetail = (id: string) => {
  return useQuery<ProductDetailDto, Error>({
    queryKey: [QUERY_KEYS.PRODUCT.DETAIL, id],
    queryFn: () => getProductDetail(id),
  });
};

export const useEditProduct = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PRODUCT.EDIT,
    mutationFn: (params: { id: string; data: UpdateProductDto }) => editProduct(params.id, params.data),
  });
};

export const useGetProductAttributes = (id: string) => {
  return useQuery<ProductAttributeDto[], Error>({
    queryKey: [QUERY_KEYS.PRODUCT.ATTRIBUTES, id],
    queryFn: () => getProductAttributes(id),
  });
};
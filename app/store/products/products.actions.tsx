import { ProductType } from "@/app/common/types/product.model";
import { createAction } from "@reduxjs/toolkit";

export const setCategories = createAction<string[]>('Set Categories');

export const setProducts = createAction<ProductType[]>('Set Products');

export const setProduct = createAction<ProductType>('Set Product');

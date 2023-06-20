import { Product } from "@/app/common/types/product.model";
import { createAction } from "@reduxjs/toolkit";

export const setCategories = createAction<string[]>('Set Categories');

export const setProducts = createAction<Product[]>('Set Products');

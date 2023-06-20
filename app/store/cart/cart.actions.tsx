import { ProductType } from "@/app/common/types/product.model";
import { createAction } from "@reduxjs/toolkit";

export const addProductToCart = createAction<ProductType>('Add Product To Cart');

export const deleteProduct = createAction<number>('Delete Product');

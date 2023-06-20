import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const categories = (state: RootState) => state.products.categories;
const products = (state: RootState) => state.products.products;
const product = (state: RootState) => state.products.product;

export const getStoredCategories = createSelector(categories, c => c);
export const getStoredProducts = createSelector(products, p => p);
export const getStoredProduct = createSelector(product, p => p);
export const getProductById = createSelector([products, (products, index: number) => index], ((p, index) => p.find(product => product.id === index)));
export const getProductsByCategory = createSelector([products, (products, category: string) => category], ((p, cat) => p.filter(product => product.category === cat)));

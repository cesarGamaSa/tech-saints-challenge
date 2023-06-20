import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const categories = (state: RootState) => state.products.categories;
const products = (state: RootState) => state.products.products;

const getCategories = createSelector(categories, c => c);
const getProducts = createSelector(products, p => p);
const getProductById = (index: number) => createSelector(products, (p => p.find(product => product.id === index)));
const getProductsByCategory = (category: string) => createSelector(products, (p => p.filter(product => product.category === category)));

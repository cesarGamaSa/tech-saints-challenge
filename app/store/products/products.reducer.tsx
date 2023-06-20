import { createReducer } from "@reduxjs/toolkit";
import { setCategories, setProducts } from "./products.actions";
import { Product } from "@/app/common/types/product.model";

interface ProductState {
    categories: string[];
    products: Product[];
}

const initialState: ProductState = {
    categories: [],
    products: []
};

export const productsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setCategories, (state, action) => {
            state.categories = action.payload
        })
        .addCase(setProducts, (state, action) => {
            state.products = action.payload
        })
});

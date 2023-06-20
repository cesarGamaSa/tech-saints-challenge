import { createReducer } from "@reduxjs/toolkit";
import { setCategories, setProduct, setProducts } from "./products.actions";
import { ProductType } from "@/app/common/types/product.model";

interface ProductState {
    categories: string[];
    products: ProductType[];
    product: ProductType;
}

const initialState: ProductState = {
    categories: [],
    products: [],
    product: {} as ProductType
};

export const productsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setCategories, (state, action) => {
            state.categories = action.payload
        })
        .addCase(setProducts, (state, action) => {
            state.products = action.payload
        })
        .addCase(setProduct, (state, action) => {
            state.product = action.payload
        })
});

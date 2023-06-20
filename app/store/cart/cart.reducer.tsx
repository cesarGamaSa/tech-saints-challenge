import { createReducer } from "@reduxjs/toolkit";
import { addProductToCart, deleteProduct } from "./cart.actions";
import { ProductType } from "@/app/common/types/product.model";

interface CartElement {
    product: ProductType;
    amount: number;
}

const initialState: CartElement[] = [];

export const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addProductToCart, (state, action) => {
            const prod = state.find(el => el.product.id === action.payload.id);
            prod ? prod.amount++ : state.push({product: action.payload, amount: 1});
        })
        .addCase(deleteProduct, (state, action) => {
            return state.filter(el => el.product.id !== action.payload)
        })
});

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const cart = (state: RootState) => state.cart;

export const getStoredCart = createSelector(cart, c => c);


'use client';

import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/products.reducer';
import { cartReducer } from './cart/cart.reducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

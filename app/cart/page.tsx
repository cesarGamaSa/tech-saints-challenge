'use client';

import { deleteProduct } from "../store/cart/cart.actions";
import { getStoredCart } from "../store/cart/cart.selector";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Cart() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state);

    const cart = getStoredCart(state);
    
    return (
        <div>
            {cart.map(el =>
                <div key={el.product.id}>
                    <p>{el.product.name}</p>
                    <p>{el.amount}</p>
                    <button onClick={() => dispatch(deleteProduct(el.product.id))}>Delete</button>
                </div>    
            )}
        </div>
    );
}

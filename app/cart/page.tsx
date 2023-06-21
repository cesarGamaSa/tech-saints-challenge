'use client';

import Image from 'next/image';
import { deleteProduct } from "../store/cart/cart.actions";
import { getStoredCart } from "../store/cart/cart.selector";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import styles from './cart.module.css';

export default function Cart() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state);

    const cart = getStoredCart(state);

    if (!cart?.length) {
        return (
            <div className={styles.emptyCart}>
                <Image src="/empty-cart.png" alt="Empty" width={200} height={200} priority />
                <p className='mt-3'>Cart is empty. Please go back and add items to the cart.</p>
            </div>
        );
    }

    return (
        <div>
            {cart.map(el =>
                <div key={el.product.id}>
                    <p>{el.product.name}</p>
                    <p>{el.amount}</p>
                    <button onClick={() => dispatch(deleteProduct(el.product.id))} className="btn btn-danger">Delete</button>
                </div>    
            )}
        </div>
    );
}

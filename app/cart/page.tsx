/* eslint-disable @next/next/no-img-element */
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

    function getCartTotal() {
        let total = 0;
        for (let el of cart) {
            total += el.amount * el.product.price;
        }
        return total;
    }

    return (
        <div className={styles.cartContainer}>
            {cart.map(el =>
                <div key={el.product.id} className='row'>
                    <img src={el.product.image} alt="Product Image" className="col-4" />
                    <div className='col-8'>
                        <div>
                            <h4>{el.product.name}</h4>
                            <p>
                                <span>{el.product.price}€</span>
                                <br />
                                <span>Amount: {el.amount}</span>
                            </p>
                        </div>
                        <button onClick={() => dispatch(deleteProduct(el.product.id))} className="btn btn-danger w-100">Delete</button>
                    </div>
                </div>
            )}
            <p><strong>Total:</strong> {getCartTotal()}€</p>
        </div>
    );
}

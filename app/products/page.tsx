/* eslint-disable @next/next/no-img-element */
'use client';

import styles from './products.module.css';
import { useSearchParams } from 'next/navigation';
import { ProductType } from "../common/types/product.model";
import { getProducts } from "../common/services/market.service";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProductsByCategory, getStoredProducts } from "../store/products/products.selector";
import { addProductToCart } from '../store/cart/cart.actions';

export default function Products() {
    const query = useSearchParams().get('category');
    const state = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    let products: ProductType[];

    if (query) {
        products = getProductsByCategory(state, query);
    } else {
        products = getStoredProducts(state);
    }

    if (!products?.length) {
        dispatch(getProducts());
    }

    return (
        <div className={styles.productsContainer}>
            {products.map((product) => 
                <div key={product.id} className={styles.productItem}>
                    <img src={product.image} alt="Product Image" className='col-3' />
                    <div className='col-6'>
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                        <p>{product.price}€</p>
                    </div>
                    <button onClick={() => dispatch(addProductToCart(product))} className='btn btn-primary'>Add to cart</button>
                </div>
            )}    
        </div>
    );
}

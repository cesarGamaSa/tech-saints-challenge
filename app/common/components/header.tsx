'use client';

import styles from './header.module.css';
import { getCategories } from "../services/market.service";
import Image from 'next/image';
import Link from "next/link";
import { getStoredCategories } from '@/app/store/products/products.selector';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useState } from 'react';
import { getStoredCart } from '@/app/store/cart/cart.selector';

export default function Header() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state);
    const categories = getStoredCategories(state);
    const cart = getStoredCart(state);
    const [isShown, setIsShown] = useState(false);

    if (!categories.length) {
        dispatch(getCategories());
    }

    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <Image
                        src="/next.svg"
                        alt="Logo"
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
                <ul className={styles.categoryList}>
                    <li key="all">
                        <Link href="/products">All products</Link>
                    </li>
                    {categories.map((category, index) => 
                        <li key={index}>
                            <Link href={{
                                pathname: '/products',
                                query: { category: category },
                            }}>{category}</Link>
                        </li>
                    )}
                </ul>
                <Link href="/cart" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className={styles.cartIcon}>
                    <Image
                        src="/cart.svg"
                        alt="Cart"
                        width={20}
                        height={20}
                        priority
                    />
                </Link>
            </nav>
            {isShown && (
                <div className={styles.miniCart} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    {cart.map(el =>
                        <div key={el.product.id} className='col'>
                            <span>{el.product.name}</span>
                            <br />
                            <p className={styles.cartValues}>
                                <span>{el.product.price}€</span>
                                <span>Amount: {el.amount}</span>
                            </p>
                        </div>
                    )}
                    <Link href="/cart" className='btn btn-primary w-100'>Go to cart</Link>
                </div>
            )}
        </header>
    );
}

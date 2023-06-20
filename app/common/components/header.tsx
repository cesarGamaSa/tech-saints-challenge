'use client';

import styles from './header.module.css';
import { getCategories } from "../services/market.service";
import Image from 'next/image';
import Link from "next/link";
import { getStoredCategories } from '@/app/store/products/products.selector';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

export default function Header() {
    const dispatch = useAppDispatch();
    const categories = getStoredCategories(useAppSelector(state => state));

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
            </nav>
        </header>
    );
}

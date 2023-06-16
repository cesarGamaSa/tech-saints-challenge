'use client';

import { useEffect, useState } from "react";
import { getCategories } from "../services/market.service";
import Image from 'next/image';
import Link from "next/link";

export default function Header() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    });

    return (
        <header>
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
                <ul>
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

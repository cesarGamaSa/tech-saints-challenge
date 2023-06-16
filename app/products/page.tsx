'use client';

import { useEffect, useState } from "react";
import { Product } from "../common/types/product.model";
import { useSearchParams } from 'next/navigation';
import { getCategory, getProducts } from "../common/services/market.service";
import Link from "next/link";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const query = useSearchParams().get('category');

    useEffect(() => {
        if (query) {
            getCategory(query).then((data) => {
                setProducts(data);
            });;
        } else {
            getProducts().then((data) => {
                setProducts(data);
            });
        }
    });

    return (
        <div>
            <div>
                {products.map((product) => 
                    <div key={product.id}>
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                        <p>{product.price}</p>
                    </div>
                )}    
            </div>
        </div>
    );
}

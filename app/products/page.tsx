'use client';

import { useEffect, useState } from "react";
import { Product } from "../common/types/product.model";
import { useSearchParams } from 'next/navigation';
import { getCategory, getProducts } from "../common/services/market.service";
import Header from "../common/components/header";

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
            <Header />
            {products.map((product, index) => 
                <div key={index}>{product.name}</div>
            )}
        </div>
    );
}

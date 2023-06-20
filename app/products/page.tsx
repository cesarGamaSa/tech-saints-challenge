'use client';

import { useSearchParams } from 'next/navigation';
import { ProductType } from "../common/types/product.model";
import { getProducts } from "../common/services/market.service";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProductsByCategory, getStoredProducts } from "../store/products/products.selector";

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

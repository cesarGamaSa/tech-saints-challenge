/* eslint-disable @next/next/no-img-element */
'use client';

import { getProduct } from "@/app/common/services/market.service";
import { addProductToCart } from "@/app/store/cart/cart.actions";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getStoredProduct } from "@/app/store/products/products.selector";

export default function Product({ params }: { params: { id: string } }) {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state);
    const product = getStoredProduct(state);

    if (product?.id !== +params.id) {
        dispatch(getProduct(+params.id));
    }

    return (
        product?.id === +params.id && <div>
            <div>
                <img src={product.image} alt="Product Image" />
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                </div>
                <div>
                    <p>{product.price}</p>
                    <button onClick={() => dispatch(addProductToCart(product))}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

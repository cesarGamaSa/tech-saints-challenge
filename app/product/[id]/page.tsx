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
        product?.id === +params.id && <div className='px-4'>
            <div className="row">
                <img src={product.image} alt="Product Image" className="col-4" />
                <div className="col-8">
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>
                            <span>Category: {product.category}</span>
                            <br />
                            <span>{product.price}€</span>
                        </p>
                    </div>
                    <button onClick={() => dispatch(addProductToCart(product))} className="btn btn-primary w-100">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

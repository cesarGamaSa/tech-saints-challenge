'use client';

import { getProduct } from "@/app/common/services/market.service";
import { useEffect, useState } from "react";
import { ProductType } from "../../common/types/product.model";

export default function Product({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<ProductType>({} as ProductType);

    useEffect(() => {
        getProduct(+params.id).then((data) => {
            setProduct(data);
        });
    });

    return (
        <div>
            <div>
                <img src={product.image} alt="Product Image" />
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    );
}

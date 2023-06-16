'use client';

import { getProduct } from "@/app/common/services/market.service";
import { useEffect, useState } from "react";
import { Product } from "../../common/types/product.model";

export default function Product({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product>({} as Product);

    useEffect(() => {
        getProduct(+params.id).then((data) => {
            setProduct(data);
        });
    });

    return (
        <div>
            {product.name}
        </div>
    );
}

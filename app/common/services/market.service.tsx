import { setCategories, setProduct, setProducts } from "@/app/store/products/products.actions";
import { Action, Dispatch } from "redux";

const basicApi = 'https://esaintsmarket.onrender.com/';

export const getCategories = () => async (dispatch: Dispatch<Action>) => {
    const response = await fetch(basicApi + 'categories').then(res => res.json());
    dispatch(setCategories(response));
}

export const getProducts = () => async (dispatch: Dispatch<Action>) => {
    const response = await fetch(basicApi + 'products').then(res => res.json());
    dispatch(setProducts(response));
}

export const getProduct = (id: number) => async (dispatch: Dispatch<Action>) => {
    const response = await fetch(basicApi + 'products/' + id).then(res => res.json());
    dispatch(setProduct(response));
}

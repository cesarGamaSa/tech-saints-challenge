const basicApi = 'https://esaintsmarket.onrender.com/';

export async function getProducts() {
    return await fetch(basicApi + 'products').then(res => res.json());
}

export async function getProduct(id: number) {
    return await fetch(basicApi + 'products/' + id).then(res => res.json());
}

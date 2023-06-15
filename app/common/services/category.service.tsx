const basicApi = 'https://esaintsmarket.onrender.com/';

export async function getCategories() {
    return await fetch(basicApi + 'categories').then(res => res.json());
}

export async function getCategory(name: string) {
    return await fetch(basicApi + 'categories' + name).then(res => res.json());
}

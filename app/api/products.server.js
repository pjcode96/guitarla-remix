export async function getProducts() {
    const response = await fetch(`${process.env.API_URL}/products?populate=image`)
    const products = await response.json();
    return products.data;
}

export async function getProduct(id) {
    const response = await fetch(`${process.env.API_URL}/product/${id}/?populate=image`, {
        method: 'GET',

    })
}
export async function getProducts() {
    const response = await fetch(`${process.env.API_URL}/products?populate=image`)
    const products = await response.json();
    return products.data;
}

export async function getProduct(url) {
    const response = await fetch(`${process.env.API_URL}/products?filters[slug][$eq]=${url}&populate=image`)
    const product = await response.json()
    return product
}
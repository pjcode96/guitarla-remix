import { useLoaderData } from "@remix-run/react"
import { getProducts } from "../api/products.server"

import styles from '../styles/shop.css'
import ProductList from "../components/productList"

export function links() {
    return (
        [
            {
                rel: 'stylesheet',
                href: styles
            }
        ]
    )
}

export async function loader() {
    const products = await getProducts()
    return products
}

function Shop() {

    const products = useLoaderData();
    return (
        <main className="container">
            <ProductList products={products} />
        </main>
    )
}

export default Shop
import { useLoaderData } from "@remix-run/react"
import { getProducts } from "../api/products.server"
import Product from "~/components/product"

import styles from '../styles/shop.css'

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
            <h2 className="heading">Nuestra colección</h2>
            {
                products.length > 0 &&
                (
                    <div className="product-grid">
                        {
                            products?.map(
                                (product) => (
                                    <Product
                                        key={product?.id}
                                        product={product?.attributes}
                                    />
                                )
                            )
                        }
                    </div>
                )
            }
        </main>
    )
}

export default Shop
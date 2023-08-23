import { useLoaderData } from "@remix-run/react"
import { getProduct } from "../api/products.server";

export async function loader({ request, params }) {
    console.log(request)
    console.log(params)
    return '';
}

function Product() {

    const product = useLoaderData();
    return (
        <div>$holo</div>
    )
}

export default Product
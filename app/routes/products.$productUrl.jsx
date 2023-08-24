import { useLoaderData } from "@remix-run/react"
import { getProduct } from "~/api/products.server";

export async function loader({ params }) {
    const product = await getProduct(params.productUrl)

    if (product.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return product;
}

export function meta({ data }) {
    return (
        [
            {
                title: `GuitarLa - ${data.data[0].attributes.name}`
            }, {
                description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`

            }
        ]
    )
}

function Product() {

    const product = useLoaderData();
    const { name, description, price, image } = product.data[0].attributes
    return (
        <div className="product">

            <img className="image" src={image.data.attributes.url} alt={`Imagen de la guitarra ${name}`} />
            <div className="product__content">
                <h3 className="product__name">{name}</h3>
                <p className="text">
                    {description}
                </p>
                <p className="product__price">${price}</p>
            </div>
        </div>
    )
}

export default Product
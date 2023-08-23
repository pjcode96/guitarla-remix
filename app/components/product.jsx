import { Link } from "@remix-run/react"

function Product({ product }) {

    const { name, description, price, slug, image } = product

    const imageUrl = image?.data?.attributes?.formats?.medium?.url
    return (
        <div className='product'>
            <img className="product__image" src={imageUrl} alt={`Imagen de la guitarra ${name}`} />
            <div className="product__content">
                <h3 className="product__name">{name}</h3>
                <p className='product__description'>{description}</p>
                <p className='product__price'>${price}</p>

                <Link className="product__link" to={`/products/${slug}`}>Ver producto</Link>
            </div>
        </div>
    )
}

export default Product
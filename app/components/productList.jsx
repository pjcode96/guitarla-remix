import Product from "./product"

function ProductList({ products }) {
    return (
        <>
            <h2 className="heading">Nuestra colección</h2>
            {
                products?.length > 0 &&
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
        </>
    )
}

export default ProductList
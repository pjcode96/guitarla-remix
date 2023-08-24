import styles from '../styles/cart.css'

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

export function meta() {
    return (
        [
            { title: 'GuitarLA - Carrito' },
            { description: 'GuitarLA, venta de guitarras, música, blog' }
        ]
    )
}

function Cart() {
    return (
        <main className="container">
            <h1 className="heading">Carrito de compras</h1>

            <div className="cart__content">
                <div className="cart">

                </div>

                <aside className="cart__resume">
                    <h3 className="cart__resume-title">Resumen del Pedido</h3>
                    <p>Total a pagar: $</p>
                </aside>
            </div>
        </main>
    )
}

export default Cart
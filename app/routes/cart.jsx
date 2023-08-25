import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import styles from '../styles/cart.css'
import CartItem from '../components/cartItem'
import { ClientOnly } from 'remix-utils'

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

    const [total, setTotal] = useState(0)
    const { cart, setCart } = useOutletContext()

    useEffect(
        () => {
            const calcTotal = cart.reduce(
                (total, product) => total + (product.price * product.amount)
                , 0
            )
            setTotal(calcTotal)
        }, [cart]
    )

    const changeAmount = (id, amount) => {
        const updatedCart = cart.map(
            (product) => {
                if (product.id === id) {
                    product.amount = amount
                }
                return product
            }
        )
        setCart(updatedCart)
    }

    return (
        <ClientOnly fallback={'Cargando...'}>
            {() => (
                <main className="container">
                    <h2 className="heading">Carrito de compras</h2>

                    <div className="cart__content">
                        <div className="cart">
                            <h2 className='cart__title'>Artículos</h2>
                            {cart.length === 0 ? (<p>Carrito vacío</p>) :

                                (
                                    cart.map(
                                        (product) => {
                                            return (
                                                <CartItem
                                                    key={product.id}
                                                    product={product}
                                                    changeAmount={changeAmount}
                                                    useOutletContext={useOutletContext}
                                                />
                                            )
                                        }
                                    )
                                )

                            }
                        </div>

                        <aside className="cart__resume">
                            <h3 className="cart__resume-title">Resumen del Pedido</h3>
                            <p>Total a pagar: ${total.toFixed()}</p>
                        </aside>
                    </div>
                </main>
            )}

        </ClientOnly>
    )
}

export default Cart
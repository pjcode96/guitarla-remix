
import { getSubtotal } from "../utils/helpers"

function CartItem({ product, changeAmount, useOutletContext }) {

    const { removeCartItem } = useOutletContext()
    const { id, name, image, price, amount } = product

    const handleAmountChange = (e) => changeAmount(id, +e.target.value)

    const handleRemoveItem = () => {
        removeCartItem(id)
    }

    return (
        <div className='item'>
            <div>
                <img className='item__image' src={image} alt={`Imagen del product ${name}`} />
            </div>
            <div>
                <p className="item__name">{name}</p>
                <label htmlFor="quantity">Cantidad</label>
                <select
                    id="quantity"
                    onChange={handleAmountChange}
                    defaultValue={amount}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="item__price">$<span>{price}</span></p>
                <p className="item__subtotal">Subtotal: $<span>{getSubtotal(price, amount)}</span></p>
                <button
                    type="button"
                    className="item__delete-button"
                    onClick={handleRemoveItem}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem
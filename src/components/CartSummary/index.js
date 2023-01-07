// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalCartItems = cartList.length
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total">
              Order Total: <span className="total">{total}</span>
            </h1>
            <p className="total-cart-items">{totalCartItems} Items in cart</p>
            <button className="checkout-button-desktop" type="button">
              Checkout
            </button>
          </div>
          <button className="checkout-button-mobile" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

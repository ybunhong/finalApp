import { useCart } from '../../contexts/CartContext'

function CheckoutSummary() {
  const { state } = useCart()

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (state.items.length === 0) {
    return (
      <div className="checkout-summary">
        <h3>Cart Summary</h3>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="checkout-summary">
      <h3>Cart Summary</h3>
      <div className="cart-items">
        {state.items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">x{item.quantity}</span>
            </div>
            <div className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-totals">
        <div className="total-row">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="total-row total-price">
          <span>Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary

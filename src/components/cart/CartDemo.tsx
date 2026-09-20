import { useCart } from '../../contexts/CartContext'

function CartDemo() {
  const { state, addItem, removeItem, updateQuantity } = useCart()

  const sampleProducts = [
    { id: 1, name: 'React Book', price: 29.99 },
    { id: 2, name: 'TypeScript Handbook', price: 19.99 },
    { id: 3, name: 'Advanced React Patterns', price: 39.99 },
  ]

  const handleAddItem = (product: { id: number; name: string; price: number }) => {
    addItem(product)
  }

  const handleRemoveItem = (id: number) => {
    removeItem(id)
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    updateQuantity(id, quantity)
  }

  return (
    <div className="cart-demo">
      <h2>Shopping Cart Demo</h2>
      
      <div className="products-section">
        <h3>Products</h3>
        <div className="products-list">
          {sampleProducts.map(product => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddItem(product)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h3>Your Cart</h3>
        {state.items.length === 0 ? (
          <p className="empty-cart">No items in cart</p>
        ) : (
          <div className="cart-items">
            {state.items.map(item => (
              <div key={item.id} className="cart-item-row">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
                <div className="item-controls">
                  <button 
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="quantity-button"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartDemo

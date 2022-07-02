import CartItem from './CartItem'

function Cart({ onClose, onRemoveCartItem, cartItems = [] }) {

  return (
    <div className="cart">
      <div onClick={onClose} className="cart__overlay">
      </div>
      <div className="cart__curtain">
        <div className="cart__items">
          <div className="cart__header">
            <h2 className="cart__header--title">Кошик</h2>
            <button onClick={onClose} className="cart__header--close"></button>
          </div>
          {
            cartItems.map((cartItem, index) => (
              <CartItem 
                key={index}
                id={cartItem.id}
                imgUrl={cartItem.imgUrl} 
                title={cartItem.title} 
                price={cartItem.price} 
                number={cartItem.number}
                onRemoveCartItem={onRemoveCartItem}
              />
            ))
          }
        </div>
        <div className="cart__pay">
          <div className="cart__pay--sum">
            <p>Загалом</p><p>259₴</p>
          </div>
          <button className="cart__pay--btn">Придбати</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
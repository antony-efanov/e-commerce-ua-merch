import CartItem from './CartItem';
import CartPay from './CartPay';
import CartEmpty from './CartEmpty';


function Cart({ onClose, onRemoveCartItem, cartItems = [] }) {

  return (
    <div className="cart">
      <div onClick={onClose} className="cart__overlay">
      </div>
      <div className="cart__curtain">
        <div className="cart__header">
          <h2 className="cart__header--title">Кошик</h2>
          <button onClick={onClose} className="cart__header--close"></button>
        </div>
        <div className="cart__items">
          {
            cartItems.map((cartItem, index) => (
              <CartItem 
                key={index} 
                id={cartItem.id} 
                parentID={cartItem.parentID}
                imgUrl={cartItem.imgUrl} 
                title={cartItem.title} 
                price={cartItem.price} 
                onRemoveCartItem={(id, parentID) => onRemoveCartItem(id, parentID)}
              />
            ))
          }
        </div>
        
        {cartItems.length > 0 ? 
        <CartPay /> : 
        <CartEmpty onClose={onClose} />}

      </div>
    </div>
  );
}

export default Cart;
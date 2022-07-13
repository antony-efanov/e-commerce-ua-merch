import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartPay from './CartPay';
import CartEmpty from './CartEmpty';

import { useContext } from 'react';
import AppContext from '../../context';

function Cart({ cartItems = [] }) {

  const { onCloseCart } = useContext(AppContext)

  return (
    <div className="cart">
      <div onClick={onCloseCart} className="cart__overlay"></div>
      <div className="cart__curtain">
        <CartHeader />
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
              />
            ))
          }
        </div>
        
        {cartItems.length > 0 ? <CartPay /> : <CartEmpty />}

      </div>
    </div>
  );
}

export default Cart;
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartPay from './CartPay';
import CartInfo from './CartInfo';

import { useContext } from 'react';
import AppContext from '../../context';
import { useState } from 'react';
import axios from 'axios';

function Cart() {

  const { cartItems = [], setCartItems, onCloseCart } = useContext(AppContext)

  const [orderStatus, setOrderStatus] = useState(false)

  const onClickOrder = () => {
    setOrderStatus(true)
    // axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/orders', cartItems)
    setCartItems([])
  }

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
                {...cartItem}
              />
            ))
          }
        </div>
        
        {cartItems.length > 0 ? <CartPay onClickOrder={onClickOrder} /> : 
        <CartInfo
        imgSrc="/img/box.png"
        title="Порожньо"
        text="Будь-даска, додайте хоча б один товар в корзину"
        onCloseCart={onCloseCart}
        />}

      </div>
    </div>
  );
}

export default Cart;
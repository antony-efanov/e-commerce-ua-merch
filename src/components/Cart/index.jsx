import axios from 'axios';

import { useContext } from 'react';
import { AppContext } from '../../context';
import { useState } from 'react';

import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartInfo } from './CartInfo';
import { CartPay } from './CartPay';


export function Cart({ opened }) {

  const { cartItems = [], setCartItems, onCloseCart } = useContext(AppContext)

  const [orderStatus, setOrderStatus] = useState(false)
  const [orderID, setOrderID] = useState(null)

  const onClickOrder = async () => {
    try {
      setOrderStatus(true)
      const { data } = await axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/orders', {
        items: cartItems
      });
      cartItems.forEach(cartItem => {
        axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${cartItem.id}`)
      });
      setCartItems([])
      setOrderID(data.id);
    } catch (error) {
      alert(`Помилка оформлення замовлення ${error}`)
    }
  }

  return (
    <div className={opened ? "cart cart__visible" : "cart"}>
      <div onClick={onCloseCart} className={opened ? "cart__overlay cart__overlay--visible" : "cart__overlay"}></div>
      <div className={opened ? "cart__curtain cart__curtain--opened" : "cart__curtain"}>

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
        imgSrc={orderStatus ? "/e-commerce-ua-merch/img/check-list.png" : "/e-commerce-ua-merch/img/box.png"}
        title={orderStatus ? "Дякуємо!" : "Порожньо"}
        text={orderStatus ? `Ваше замовлення №${orderID} успішно створене` : "Будь-даска, додайте хоча б один товар у кошик"}
        onCloseCart={onCloseCart}
        />}

      </div>
    </div>
  );
}
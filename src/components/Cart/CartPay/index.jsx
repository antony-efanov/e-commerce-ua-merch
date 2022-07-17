import { useContext } from "react";
import { AppContext } from "../../../context";


export function CartPay({ onClickOrder }) {

  const { cartItems } = useContext(AppContext)

  const priceSum = () => {
    const result = cartItems.reduce((acumulator, cartItem) => acumulator + Number(cartItem.price), 0);
    return result
  }

  return (
    <div className="cart__pay">
      <div className="cart__pay--sum">
        <p>Загалом</p><strong>{priceSum()}₴</strong>
      </div>
      <button onClick={onClickOrder} className="cart__pay--btn">Придбати</button>
    </div>
  );
}
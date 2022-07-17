import { useContext } from "react";
import { AppContext } from "../../../context";


export function CartHeader() {

  const { onCloseCart } = useContext(AppContext)

  return (
    <div className="cart__header">
      <h2 className="cart__header--title">Кошик</h2>
      <button onClick={onCloseCart} className="cart__header--close"></button>
    </div>
  );
}
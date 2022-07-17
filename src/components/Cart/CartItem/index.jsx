import { useContext } from "react";
import { AppContext } from "../../../context";


export function CartItem({ id, imgUrl, title, price}) {

  const { onRemoveCartItem } = useContext(AppContext)
  return (
    <div className="cart__item">
      <img className="cart__item--img" src={imgUrl} alt="card_img"/>
      <div className="cart__item--text">
        <p>{title}</p>
        <h3>{price}₴</h3>
      </div>
      <button onClick={(i) => onRemoveCartItem(id)} className="cart__item--remove"></button>
    </div>
  );
}
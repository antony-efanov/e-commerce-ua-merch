function CartEmpty({ onClose }) {
  return (
    <div className="cart__empty">
      <img className="cart__empty--img" src="/img/box.png" alt="emptyCart"/>
      <h3 className="cart__empty--title">Кошик порожній</h3>
      <button onClick={onClose} className="cart__empty--btn" ><img src="/img/icons/arrow-left.svg" alt="arrow-left"/>Повернутися</button>
  </div>
  );
}

export default CartEmpty;
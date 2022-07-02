function CartItem({ imgUrl, title, price, number, id, onRemoveCartItem }) {
  return (
    <div className="cart__item">
      <img className="cart__item--img" src={imgUrl} alt="card_img"/>
      <div className="cart__item--text">
        <p>{title}</p>
        <h3>{price}₴</h3>
      </div>
      <button onClick={n => onRemoveCartItem(id)} className="cart__item--remove"></button>
    </div>
  );
}

export default CartItem;
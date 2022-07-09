function CartItem({ id, parentID, imgUrl, title, price, onRemoveCartItem }) {
  return (
    <div className="cart__item">
      <img className="cart__item--img" src={imgUrl} alt="card_img"/>
      <div className="cart__item--text">
        <p>{title}</p>
        <h3>{price}₴</h3>
      </div>
      <button onClick={(i, pID) => onRemoveCartItem(id, parentID)} className="cart__item--remove"></button>
    </div>
  );
}

export default CartItem;
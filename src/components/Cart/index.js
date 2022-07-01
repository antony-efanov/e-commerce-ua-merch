function Cart({ onClose, cartItems = [] }) {
  return (
    <div className="cart">
      <div onClick={onClose} className="cart__overlay">
      </div>
      <div className="cart__curtain">
        <div className="cart__items">
          <div className="cart__header">
            <h2 className="cart__header--title">Кошик</h2>
            <button onClick={onClose} className="cart__header--close"></button>
          </div>
          {
            cartItems.map(obj => (
              <div className="cart__item">
                <img className="cart__item--img" src={obj.imgUrl} alt="card_img"/>
                <div className="cart__item--text">
                  <p>{obj.title}</p>
                  <h3>{obj.price}₴</h3>
                </div>
                <button className="cart__item--remove"></button>
              </div>
            ))
          }
        </div>
        <div className="cart__pay">
          <div className="cart__pay--sum">
            <p>Загалом</p><p>259₴</p>
          </div>
          <button className="cart__pay--btn">Придбати</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
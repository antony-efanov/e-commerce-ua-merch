function Favorite(props) {
  return (
    <div className="favorite">
      <div onClick={props.onClose} className="cart__overlay">
      </div>
      <div className="favorite__curtain">
        <div className="favorite__items">
          <div className="favorite__header">
            <h2 className="favorite__header--title">Улюблене</h2>
            <button onClick={props.onClose} className="favorite__header--close"></button>
          </div>
          <div className="favorite__item">
            <img className="favorite__item--img" src="img/items/cup__major.webp" alt="favorite_img"/>
            <div className="favorite__item--text">
              <p>Футболка «А ти точно айтішнік?»</p>
              <h3>259₴</h3>
            </div>
            <button className="favorite__item--remove"></button>
          </div>
        </div>
        <div className="favorite__pay">
          <div className="favorite__pay--sum">
            <p>Загалом</p><p>259₴</p>
          </div>
          <button className="favorite__pay--btn">До кошика</button>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
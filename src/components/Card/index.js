import { useState } from 'react'

function Card(props) {

  const [isChecked, setChecked] = useState(false);

  const onClick = () => {

    setChecked(isChecked => !isChecked);
    console.log(isChecked);
  }

  return (
    <div className="card">
      <p className="card__availability">в наявності</p>
      <button className="card__btn card__btn--fav">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6129 2.86902C15.3646 2.30759 15.0067 1.79882 14.5591 1.3712C14.1111 0.94231 13.583 0.601475 13.0033 0.367231C12.4023 0.123371 11.7577 -0.0014504 11.1068 1.27149e-05C10.1938 1.27149e-05 9.30292 0.244222 8.52876 0.705507C8.34355 0.815853 8.1676 0.937054 8.00092 1.06911C7.83423 0.937054 7.65828 0.815853 7.47308 0.705507C6.69892 0.244222 5.80807 1.27149e-05 4.895 1.27149e-05C4.23752 1.27149e-05 3.60041 0.123022 2.99849 0.367231C2.41694 0.602396 1.89281 0.940672 1.44276 1.3712C0.994552 1.79834 0.636513 2.30723 0.388933 2.86902C0.131497 3.45332 0 4.07379 0 4.71235C0 5.31473 0.12594 5.94244 0.375969 6.58101C0.585252 7.11465 0.885287 7.66819 1.26866 8.22716C1.87614 9.11174 2.71142 10.0343 3.74858 10.9695C5.46729 12.5198 7.16934 13.5907 7.24157 13.6341L7.68051 13.9091C7.87498 14.0303 8.125 14.0303 8.31947 13.9091L8.75841 13.6341C8.83064 13.5889 10.5308 12.5198 12.2514 10.9695C13.2886 10.0343 14.1238 9.11174 14.7313 8.22716C15.1147 7.66819 15.4166 7.11465 15.624 6.58101C15.874 5.94244 16 5.31473 16 4.71235C16.0018 4.07379 15.8703 3.45332 15.6129 2.86902Z" fill="#c2c2c2"/>
          <defs>
          <linearGradient id="paint0_linear_60_1004" x1="8" y1="0" x2="8" y2="14" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFB0B0"/>
          <stop offset="1" stop-color="#FF4343"/>
          </linearGradient>
          </defs>
        </svg>
      </button>
      <a href="#"><img className="card__img" src={props.imgUrl} alt="t-shirt__it"/></a>
      <div className="card__text">
        <h5 className="card__title">
          <a href="#" >{props.title}</a>
        </h5>
        <div className="card__bottom">
          <div className="card__price-container">
            <div className="card__pricename">
              ЦІНА
            </div>
            <h4 className="card__price">{props.price}<span>₴</span></h4>
          </div>
          <input type="checkbox" className='card__checkbox' id={props.number}/>
          <label for={props.number} className="card__checkbox--btn"></label>
        </div>
      </div>
    </div>
  );
}

export default Card;
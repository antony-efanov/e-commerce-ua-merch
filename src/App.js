import { useState } from 'react';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Card from './components/Card';
import Header from './components/Header';
import Catalog from './components/Catalog'

const cardsArray = [
  {
    imgUrl: '/img/items/t-shirt__it.webp',
    title:  'Футболка «А ти точно айтішнік?»',
    price:  '259',
    number: '1'
  },
  {
    imgUrl: '/img/items/t-shirt__kherson.webp',
    title:  'Футболка «Херсон»',
    price:  '259',
    number: '2'
  },
  {
    imgUrl: '/img/items/hoodie__major.webp',
    title:  'Худі «Майор Чорнобаєв»',
    price:  '499',
    number: '3'
  },
  {
    imgUrl: '/img/items/hoodie__goose.webp',
    title:  'Худі «Army Aviation Ukraine»',
    price:  '459',
    number: '4'
  },
  {
    imgUrl: '/img/items/cup__major.webp',
    title:  'Кружка «Майор чорнобаєв»',
    price:  '119',
    number: '5'
  },
  {
    imgUrl: '/img/items/hoodie__ghost.webp',
    title:  'Худі «Привид Києва»',
    price:  '499',
    number: '6'
  },
  {
    imgUrl: '/img/items/hoodie__it.webp',
    title:  'Худі «А ти точно айтішнік?»',
    price:  '459',
    number: '7'
  },
  {
    imgUrl: '/img/items/shopper__odesa.webp',
    title:  'Шопер «Одеса»',
    price:  '159',
    number: '8'
  },
  {
    imgUrl: '/img/items/shopper__valkiria.webp',
    title:  'Шопер «VALKIRIA»',
    price:  '159',
    number: '9'
  },
  {
    imgUrl: '/img/items/shopper__zsu-cats.webp',
    title:  'Шопер «ЗСУ — Котики»',
    price:  '159',
    number: '10'
  },
  {
    imgUrl: '/img/items/t-shirt__fight.webp',
    title:  'Футболка «Ukraine In The Fight»',
    price:  '259',
    number: '11'
  },
  {
    imgUrl: '/img/items/t-shirt__goodbye.webp',
    title:  'Футболка «Nice To See You»',
    price:  '259',
    number: '12'
  },
  {
    imgUrl: '/img/items/t-shirt__major.webp',
    title:  'Футболка «Майор чорнобаєв»',
    price:  '259',
    number: '13'
  },
  {
    imgUrl: '/img/items/t-shirt__mordor.webp',
    title:  'Футблка «Mordor Is Fall»',
    price:  '259',
    number: '14'
  },
  {
    imgUrl: '/img/items/t-shirt__patron.webp',
    title:  'Футболка «Патрон»',
    price:  '259',
    number: '15'
  },
  {
    imgUrl: '/img/items/t-shirt__zsu-cats.webp',
    title:  'Футболка «ЗСУ — Котики»',
    price:  '259',
    number: '16'
  }
]

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [favOpened, setFavOpened] = useState(false);

  return (

    <div className="app">

      {cartOpened && <Cart onClose={() => {setCartOpened(false)}} />}
      {favOpened && <Favorite onClose={() => {setFavOpened(false)}} />}
      
      <div className="wrapper">
          
          <Header onClickCart={() => {setCartOpened(!cartOpened)}}
                  onClickFav={() => {setFavOpened(!favOpened)}} />

          <main className="content">

            <Catalog />
            
            <div className="cards">

              {
                cardsArray.map((obj) => (
                  <Card imgUrl={obj.imgUrl} title={obj.title} price={obj.price} number={obj.number} />
                ))
              }

            </div>

          </main>
        </div>

        <footer className="footer">
            
        </footer>
    </div>
    
  );
}

export default App;
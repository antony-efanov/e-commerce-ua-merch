import Card from './components/Card';
import Header from './components/Header';
import Catalog from './components/Catalog'

const cardsArray = [
  {
    imgUrl: '/img/items/t-shirt__it.webp',
    title:  'Футболка «А ти точно айтішнік?»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__kherson.webp',
    title:  'Футболка «Херсон»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/hoodie__major.webp',
    title:  'Худі «Майор Чорнобаєв»',
    price:  '499'
  },
  {
    imgUrl: '/img/items/hoodie__goose.webp',
    title:  'Худі «Army Aviation Ukraine»',
    price:  '459'
  },
  {
    imgUrl: '/img/items/cup__major.webp',
    title:  'Кружка «Майор чорнобаєв»',
    price:  '119'
  },
  {
    imgUrl: '/img/items/hoodie__ghost.webp',
    title:  'Худі «Привид Києва»',
    price:  '499'
  },
  {
    imgUrl: '/img/items/hoodie__it.webp',
    title:  'Худі «А ти точно айтішнік?»',
    price:  '459'
  },
  {
    imgUrl: '/img/items/shopper__odesa.webp',
    title:  'Шопер «Одеса»',
    price:  '159'
  },
  {
    imgUrl: '/img/items/shopper__valkiria.webp',
    title:  'Шопер «VALKIRIA»',
    price:  '159'
  },
  {
    imgUrl: '/img/items/shopper__zsu-cats.webp',
    title:  'Шопер «ЗСУ — Котики»',
    price:  '159'
  },
  {
    imgUrl: '/img/items/t-shirt__fight.webp',
    title:  'Футболка «Ukraine In The Fight»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__goodbye.webp',
    title:  'Футболка «Nice To See You»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__major.webp',
    title:  'Футболка «Майор чорнобаєв»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__mordor.webp',
    title:  'Футблка «Mordor Is Fall»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__patron.webp',
    title:  'Футболка «Патрон»',
    price:  '259'
  },
  {
    imgUrl: '/img/items/t-shirt__zsu-cats.webp',
    title:  'Футболка «ЗСУ — Котики»',
    price:  '259'
  }
]

function App() {
  return (

    <div className="app">
      <div className="wrapper">
          
          <Header />

          <main className="content">

            <Catalog />
            
            <div className="cards">

              {
                cardsArray.map((obj) => (
                  <Card imgUrl={obj.imgUrl} title={obj.title} price={obj.price} />
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

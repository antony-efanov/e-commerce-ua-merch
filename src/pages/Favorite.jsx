import { useContext } from 'react';
import Card from '../components/Card'
import AppContext from "../context";

function Favorite({ favItems }) {

  const state = useContext(AppContext);

  return (
    <main className="content">
      <div className="catalog">
        <h1 className="catalog__title">Улюблене</h1>
      </div>      
      <div className="cards">
        {
          favItems
          .map((item, index) => (
            <Card 
            key={index}
            id={item.id}
            // onAddToFav={item => {onAddToFav(item)}}
            // onAddToCart={item => {onAddToCart(item)}} 
            imgUrl={item.imgUrl} 
            title={item.title} 
            price={item.price} 
            amount={item.amount}
            inFav={true}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Favorite;
import { useContext } from 'react';
import Card from '../components/Card'
import AppContext from "../context";

function Favorite({ onClickPlus }) {

  const { favItems } = useContext(AppContext);

  return (
    <main className="content">
      <div className="catalog">
        <h1 className="catalog__title">Улюблене</h1>
      </div>      
      <div className="cards">
        { favItems.length === 0 ? 

          <div className='favEmpty'>
            <img src="img/broken-heart.png" alt="broken heart" />
            <p>Тут поки пусто :(</p>
          </div> 
          :
          favItems.map((item, index) => (
            <Card 
            key={index}
            onClickPlus={onClickPlus}
            {...item}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Favorite;
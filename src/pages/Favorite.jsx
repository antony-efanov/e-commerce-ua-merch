import { useContext } from 'react';
import Card from '../components/Card'
import AppContext from "../context";

function Favorite() {

  const { favItems, onClickFav, onClickPlus } = useContext(AppContext);

  return (
    <main className="content">
      <div className="catalog">
        <h1 className="catalog__title">Улюблене</h1>
      </div>      
      <div className="cards">
        { favItems.length === 0 ? 
          <div>kekis </div> :
          favItems
          .map((item, index) => (
            <Card 
            key={index}
            {...item}
            onClickFav={item => {onClickFav(item)}}
            onClickPlus={item => {onClickPlus(item)}} 
            inFav={true}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Favorite;
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Card from './components/Card';
import Header from './components/Header';
import Catalog from './components/Catalog'


function App() {

  useEffect(() => {
    fetch('https://62bd6719c5ad14c110bdcc61.mockapi.io/items')
  .then(res => {
    return res.json();
  })
  .then(json => {
    setItems(json);
  });
  }, []);

  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const onClickCart = () => {
    if (favOpened) {
      setFavOpened(!favOpened);
      setCartOpened(!cartOpened);
    } else {
      setCartOpened(!cartOpened);
    }
  }

  const [favOpened, setFavOpened] = useState(false);

  const onClickFav = () => {
    if (cartOpened) {
      setCartOpened(!cartOpened);
      setFavOpened(!favOpened);
    } else {
      setFavOpened(!favOpened);
    }
  }

  const [cartItems, setCartItems] = useState([]);

  const onClickPlus = (item) => {
    if (cartItems.length === 0) {
      setCartItems(prev => [...prev, item]);
    } else {

      if(cartItems.some(cartItem => cartItem.title === item.title)){
        console.log(cartItems.indexOf());
    } else {
        console.log("Object not found.");
        setCartItems(prev => [...prev, item])
    } 
    }
  }

  const [searchValue, setSearchValue] = useState('');

  const setSearchInput = event => {
    setSearchValue(event.target.value);
  }

  return (

    <div className="app">

      {cartOpened && <Cart cartItems={cartItems} onClose={() => {setCartOpened(false)}} />}
      {favOpened && <Favorite onClose={() => {setFavOpened(false)}} />}
      
      <div className="wrapper">
          
          <Header onClickCart={onClickCart}
                  onClickFav={onClickFav} />

          <main className="content">

            <Catalog searchValue={searchValue} setSearchInput={setSearchInput} />
            
            <div className="cards">

              {
                items
                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => (
                  <Card 
                  key={index}
                  onClickPlus={(item) => {onClickPlus(item)}} 
                  imgUrl={item.imgUrl} 
                  title={item.title} 
                  price={item.price} 
                  number={item.number} />
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
import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Card from './components/Card';
import Header from './components/Header';
import Catalog from './components/Catalog'
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/items')
    .then(res => {
      setItems(res.data);
    })
    axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems')
    .then(res => {
      setCartItems(res.data);
    })
  }, []);

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favOpened, setFavOpened] = useState(false);

  const onClickCart = () => {
    if (favOpened) {
      setFavOpened(!favOpened);
      setCartOpened(!cartOpened);
    } else {
      setCartOpened(!cartOpened);
    }
  }

  const onClickFav = () => {
    if (cartOpened) {
      setCartOpened(!cartOpened);
      setFavOpened(!favOpened);
    } else {
      setFavOpened(!favOpened);
    }
  }

  const onAddToCart = (item) => {
    axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems', item);
    setTimeout(() => {
      axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems')
      .then(res => {
        setCartItems(res.data);
      })
    }, 500);
  }

  const onRemoveCartItem = (n) => {
    // setCartItems(cartItems.filter(cartItem => {
    //   return cartItem.number !== n && cartItem;
    // }))
    axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${n}`)
    setTimeout(() => {
      axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems')
      .then(res => {
        setCartItems(res.data);
      })
    }, 500);
  }

  const [searchValue, setSearchValue] = useState('');

  const setSearchInput = event => {
    setSearchValue(event.target.value);
  }

  return (

    <div className="app">

      {cartOpened && 
      <Cart onRemoveCartItem={n => onRemoveCartItem(n)} 
      cartItems={cartItems} 
      onClose={() => {setCartOpened(false)}} 
      />}

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
                  onAddToCart={item => {onAddToCart(item)}} 
                  imgUrl={item.imgUrl} 
                  title={item.title} 
                  price={item.price} 
                  number={item.number}
                  />
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
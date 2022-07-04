import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

import Header from './components/Header';
import Cart from './components/Cart';
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
    axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems')
    .then(res => {
      setFavItems(res.data);
    })
  }, []);

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const setSearchInput = event => {
    setSearchValue(event.target.value);
  }

  const onClickCart = () => {
    setCartVisibility(!cartVisibility);
  }

  const onAddToFav = (item) => {
    axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems', item);
    setTimeout(() => {
      axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems')
      .then(res => {
        setFavItems(res.data);
      })
    }, 500);
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

  const onRemoveCartItem = (id) => {
    axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${id}`)
    setTimeout(() => {
      axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems')
      .then(res => {
        setCartItems(res.data);
      })
    }, 500);
  }

  return (

    <div className="app">

      {cartVisibility && 
      <Cart 
      cartItems={cartItems} 
      onClose={() => {setCartVisibility(!cartVisibility)}} 
      onRemoveCartItem={id => onRemoveCartItem(id)} 
      />}
      
      <div className="wrapper">
          
          <Header onClickCart={onClickCart} />

          <Routes>
            <Route path="/" element={
            <Home
              items={items}
              searchValue={searchValue}

              setSearchInput={setSearchInput}
              onAddToFav={onAddToFav}
              onAddToCart={onAddToCart}
              />
            }/>
            <Route path="/favorite" element={
              <Favorite 
              favItems={favItems}
              />} />
          </Routes>
          
          
        </div>

        <footer className="footer">
            
        </footer>
    </div>
  );
}

export default App;
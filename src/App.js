import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

import Header from './components/Header';
import Cart from './components/Cart';
import axios from 'axios';


function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {
      try {

        const cartResult = await axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems');
        const favResult = await axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems');
        const itemsResult = await axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/items');

        setIsLoading(false);
        setCartItems(cartResult.data);
        setFavItems(favResult.data);
        setItems(itemsResult.data);

      } catch (error) {
        alert(`Помилка завантаження даних з серверу: ${error}`)
      }
    }
    
    fetchData();
  }, []);

  const setSearchInput = event => {
    setSearchValue(event.target.value);
  }

  const onClickCart = () => {
    setCartVisibility(!cartVisibility);
  }
  const onClickPlus = async (item) => {
    try {
      const findItem = cartItems.find((cartItem) => Number(cartItem.parentID) === Number(item.id));
      if (findItem) {
        console.log('знайшов')
        axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${Number(findItem.id)}`);
        setCartItems((prev) => prev.filter((cartItem) => Number(cartItem.parentID) !== Number(item.id)));
      } else {
        console.log('нема, додаю')
        const { data } = await axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems', item);
        console.log(data)
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onClickFav = (item) => {
    axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems', item);
    setTimeout(() => {
      axios.get('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems')
      .then(res => {
        setFavItems(res.data);
      })
    }, 500);
  }


  const onRemoveCartItem = (id) => {
    console.log(id)
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
                cartItems={cartItems}
                searchValue={searchValue}
                
                isLoading={isLoading}
                setSearchInput={setSearchInput}
                onClickFav={onClickFav}
                onClickPlus={onClickPlus}
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
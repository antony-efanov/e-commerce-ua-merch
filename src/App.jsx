// react
import { useState, useEffect } from 'react';
import AppContext from './context';
// side libs
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { Orders } from './pages/Orders';
// components
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  
  const [items, setItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [favItems, setFavItems] = useState([])

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

  const onClickPlus = async (item) => {
    try {
      const findItem = cartItems.find((cartItem) => Number(cartItem.parentID) === Number(item.parentID));
      if (findItem) {
        axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${Number(findItem.id)}`);
        setCartItems((prev) => prev.filter((cartItem) => Number(cartItem.parentID) !== Number(item.parentID)));
      } else {
        setCartItems(prev => [...prev, item])
        const { data } = await axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems', item);
        
        setCartItems((prev) => prev.map(cartItem => {
          if (cartItem.parentID === item.parentID) {
            cartItem.id = data.id;
            return cartItem
          }
          return cartItem
        }));
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onClickFav = async (item) => {
    try {
      const findItem = favItems.find((favItem) => Number(favItem.parentID) === Number(item.parentID));
      if (findItem) {
        setFavItems((prev) => prev.filter((favItem) => Number(favItem.parentID) !== Number(item.parentID)));
        axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems/${Number(findItem.id)}`);
      } else {
        setFavItems(prev => [...prev, item])
        const { data } = await axios.post('https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems', item);
        
        setFavItems((prev) => prev.map(favItem => {
          if (favItem.parentID === item.parentID) {
            favItem.id = data.id;
            return favItem
          }
          return favItem
        }));
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveCartItem = async (id) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    await axios.delete(`https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems/${id}`);
  };

  const isItemAdded = (parentID) => {
    return cartItems.some((cartItem) => Number(cartItem.parentID) === Number(parentID));
  };

  const isItemFavorited = (parentID) => {
    return favItems.some((favItem) => Number(favItem.parentID) === Number(parentID));
  };

  const onClickCart = () => {
    setCartVisibility(!cartVisibility);
  };

  const onCloseCart = () => {
    setCartVisibility(!cartVisibility)
  };

  const setSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider 
      value={{ 
        favItems,
        cartItems,
        searchValue,
        cartVisibility,
        setCartVisibility,
        setSearchInput,
        setCartItems,
        isItemAdded,
        isItemFavorited, 
        onClickFav, 
        onCloseCart,
        onRemoveCartItem }}>
          
      {cartVisibility && <Cart />}

      <div className="wrapper">
          <Header onClickCart={onClickCart} />
          <Routes>
            <Route path="/" element={
              <Home
                items={items}
                searchValue={searchValue}
                isLoading={isLoading}
                onClickPlus={onClickPlus}
              />
            }/>
            <Route path="/favorite" element={<Favorite onClickPlus={onClickPlus} />} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
        </div>

        <footer className="footer">
            
        </footer>
    </AppContext.Provider>
  );
}

export default App;
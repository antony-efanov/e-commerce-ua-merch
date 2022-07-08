import Card from '../components/Card';
import Catalog from '../components/Catalog';


function Home({ items, cartItems, favItems, searchValue, setSearchInput, onClickFav, onClickPlus, isLoading }) {

  const filtredItems = items
  .sort((a, b) => b.amount - a.amount)
  .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

  const renderItems = () => {
    return (isLoading ? [...Array(16)] : filtredItems)
      .map((item, index) => (
        <Card 
        key={index} 
        {...item}
        onClickFav={item => {onClickFav(item)}}
        onClickPlus={item => {onClickPlus(item)}} 
        inCart={cartItems.some(cartItem => cartItem.parentID === item.id)}
        inFav={favItems.some(favItem => favItem.parentID === item.id)}
        loading={isLoading}
        />
      ));
  }
  return (
    <main className="content">
      <Catalog searchValue={searchValue} setSearchInput={setSearchInput} />       
      <div className="cards">
        
        {renderItems()}
        
      </div>
    </main>
  );
}

export default Home;
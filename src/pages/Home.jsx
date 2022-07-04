import Card from '../components/Card';
import Catalog from '../components/Catalog';


function Home({ items, searchValue, setSearchInput, onAddToFav, onAddToCart }) {
  return (
    <main className="content">
      <Catalog searchValue={searchValue} setSearchInput={setSearchInput} />       
      <div className="cards">
        {
          items                
          .sort((a, b) => {
            return b.amount - a.amount;
          })
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card 
            key={index}
            id={item.id}
            onAddToFav={item => {onAddToFav(item)}}
            onAddToCart={item => {onAddToCart(item)}} 
            imgUrl={item.imgUrl} 
            title={item.title} 
            price={item.price} 
            amount={item.amount}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Home;
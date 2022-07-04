import Card from '../components/Card'

function Favorite({ favItems }) {
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
            />
          ))
        }
      </div>
    </main>
  );
}

export default Favorite;
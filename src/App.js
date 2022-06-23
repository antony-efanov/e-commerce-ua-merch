import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
    
    <header className="header">

      <div className="brand">
        <div className="brand__logo">
          <a href="/">
            <img 
            width={65}
            src="/img/logo.webp" 
            alt="logo"/>
          </a>
        </div>
        <div className="brand-text">
          <h2 className="brand__title">Сміливість</h2>
          <p className="brand__subtitle">Магазин сувенірних речей</p>
        </div>
      </div>

      <div className="user">
        <div className="user__cart">
          <img width={25} src="/img/icons/cart.svg" alt="cart"/>
        </div>
        <div className="user__fav">
          <img width={25} src="/img/icons/heart.svg" alt="fav"/>
        </div>
        <div className="user__logo">
          <img width={25} src="/img/icons/user.svg" alt="cart"/>
        </div>
      </div>

    </header>

    <main>

      <h1 className="catalog-h1">Каталог товарів</h1>

      <div className="cards">

        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </main>

    </div>
  );
}

export default App;

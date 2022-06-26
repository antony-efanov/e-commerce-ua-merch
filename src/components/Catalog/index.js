function Catalog() {
  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог товарів</h1>
      <div className="catalog__searchbox">
        <img className="catalog__searchbox--icon" src="/img/icons/search.svg" alt="search"/>
        <input placeholder="Пошук..." className="catalog__searchbox--field" type="text"/>
      </div> 
    </div>
  );
}

export default Catalog;
function Catalog() {
  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог товарів</h1>
      <img className="catalog__search-icon" src="/img/icons/search.svg" alt="search"/>
      <input className="catalog__search" type="text"/>
    </div>
  );
}

export default Catalog;
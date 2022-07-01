function Catalog({ searchValue, setSearchInput }) {
  return (
    <div className="catalog">
      <h1 className="catalog__title">{searchValue ? `Пошук по запиту "${searchValue}"` : 'Каталог товарів'}</h1>
      <div className="catalog__searchbox">
        {!searchValue && <img className="catalog__searchbox--icon" src="/img/icons/search.svg" alt="search"/>}
        <input onChange={setSearchInput} value={searchValue} placeholder="Пошук..." className="catalog__searchbox--field" type="search"/>
      </div> 
    </div>
  );
}

export default Catalog;
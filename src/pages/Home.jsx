import { Card } from "../components/Card";
import { Catalog } from "../components/Catalog";

export function Home({ items, searchValue, isLoading, onClickPlus }) {
  const filtredItems = items
    .sort((a, b) => b.amount - a.amount)
    .filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const renderItems = () => {
    return (isLoading ? [...Array(16)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onClickPlus={onClickPlus}
        loading={isLoading}
      />
    ));
  };

  return (
    <main className="content">
      <Catalog />

      <div className="cards">{renderItems()}</div>
    </main>
  );
}

import { useContext } from "react";
import { AppContext } from "../context";

import { Card } from "../components/Card";
import { EmptyPage } from "../components/EmptyPage";

export function Favorite({ onClickPlus }) {
  const { favItems } = useContext(AppContext);

  return (
    <main className="content">
      <div className="catalog">
        <h1 className="catalog__title">Улюблене</h1>
      </div>
      <div className="cards">
        {favItems.length === 0 ? (
          <EmptyPage
            text="Ви ще нічого не вподобали"
            imgSrc="/e-commerce-ua-merch/img/broken-heart.png"
          />
        ) : (
          favItems.map((item, index) => (
            <Card key={index} onClickPlus={onClickPlus} {...item} />
          ))
        )}
      </div>
    </main>
  );
}

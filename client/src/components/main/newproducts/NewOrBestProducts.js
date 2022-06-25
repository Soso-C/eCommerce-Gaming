import React from "react";
import products from "../../../data/productData";
import NewBestCard from "./NewBestCard";

export default function NewOrBestProducts({ newOrBest }) {
  return (
    <div className="max-w-7xl mx-auto pb-10 px-4">
      <span className="text-2xl text-zinc-800 font-medium text-center block pt-8">
        {newOrBest === "new" ? "Nouveautés" : "Meilleures ventes"}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 lg:pt-16">
        {newOrBest === "new"
          ? products.products
              .filter(
                (product) =>
                  product.newProduct === true && product.bestSelling !== true
              )
              .slice(0, 4)
              .map((product, index) => {
                return <NewBestCard key={product.id} product={product} />;
              })
          : products.products
              .filter(
                (product) =>
                  product.bestSelling === true && product.newProduct !== true
              )
              .slice(0, 4)
              .map((product, index) => {
                return <NewBestCard key={product.id} product={product} />;
              })}
      </div>
    </div>
  );
}

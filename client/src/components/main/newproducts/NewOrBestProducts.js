import React, { useEffect, useState } from "react";
import NewBestCard from "./NewBestCard";
import { getBestSelling, getNewsProd } from "../../../api/article";
export default function NewOrBestProducts({ newOrBest }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    newOrBest === "new"
      ? getNewsProd()
          .then((res) => {
            setProduct(res);
          })
          .catch((err) => console.log(err))
      : getBestSelling()
          .then((res) => {
            setProduct(res);
          })
          .catch((err) => console.log(err));
  }, [newOrBest]);

  return (
    <div className="max-w-7xl mx-auto pb-10 px-4">
      <span className="text-2xl text-zinc-800 font-medium text-center block pt-8">
        {newOrBest === "new" ? "Nouveautés" : "Meilleures ventes"}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 lg:pt-16">
        {product.slice(0, 4).map((product) => {
          return <NewBestCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

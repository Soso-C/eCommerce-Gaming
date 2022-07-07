import React, { useEffect, useState } from "react";
import NewBestCard from "../../main/newproducts/NewBestCard";
import { TbSortDescending, TbSortAscending } from "react-icons/tb";

export default function ProductsList({ articles }) {
  // Scroll to top page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sortArray, setSortArray] = useState(null);

  return (
    <div className="pt-8 md:pt-32 max-w-7xl mx-auto">
      <h1 className="text-center text-xl font-medium pt-16 md:pt-0">
        {articles.length}{" "}
        {articles.length > 1 ? "produits trouvé" : "produit trouvé"}
      </h1>
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={() => setSortArray("DESC")}
          className="flex gap-2 items-center"
        >
          <TbSortDescending />
          Desc
        </button>
        <button
          onClick={() => setSortArray("ASC")}
          className="flex gap-2 items-center"
        >
          Asc
          <TbSortAscending />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 h-full px-4 mt-2">
        {articles
          // Trie nos objets en DESC ou ASC
          .sort((a, b) => {
            if (sortArray === "ASC") {
              return a.price - b.price;
            } else if (sortArray === "DESC") {
              return b.price - a.price;
            }
          })
          .map((article, index) => {
            return <NewBestCard product={article} key={index} />;
          })}
      </div>
    </div>
  );
}

import React from "react";
import CategoryCard from "./CategoryCard";
import categoryProducts from "./categoryData";

export default function CategoryBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:flex-row max-w-7xl mx-auto pb-8 pt-8 lg:pt-16 gap-4 px-4 text-zinc-800">
      {categoryProducts.map((product, index) => {
        return <CategoryCard items={product} key={product.id} />;
      })}
    </div>
  );
}

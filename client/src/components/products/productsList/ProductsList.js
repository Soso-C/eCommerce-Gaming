import React, { useEffect } from "react";
import NewBestCard from "../../main/newproducts/NewBestCard";

export default function ProductsList({ data }) {
  // Permet de target le haut de la page lorsque'on arrive sur la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-8 md:pt-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 h-full px-4 mt-2">
        {data.map((article, index) => {
          return <NewBestCard product={article} />;
        })}
      </div>
    </div>
  );
}

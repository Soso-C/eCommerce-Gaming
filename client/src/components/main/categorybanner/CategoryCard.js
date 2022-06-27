import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ items }) {
  return (
    <div className="bg-white h-full flex w-full flex-col shadow-sm shadow-gray-300 group">
      <div className="w-full h-full overflow-hidden">
        <img
          src={items.img}
          alt={`images ${items.title}`}
          className="mx-auto h-[200px] group-hover:scale-110 duration-500"
        />
      </div>
      <span className="text-xl font-bold text-center">{items.title}</span>
      <ul className="text-center lg:text-left lg:pl-6 pt-6 pb-2 text-sky-600">
        {items.sousCat.map((cat, index) => {
          return (
            <li key={index}>
              <Link to={cat.href} className="hover:opacity-75">
                {cat.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

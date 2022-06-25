import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ items }) {
  return (
    <div className="bg-white h-full flex w-full flex-col">
      <div className="w-full h-full">
        <img
          src={items.img}
          alt={`images ${items.title}`}
          className="mx-auto h-[200px]"
        />
      </div>
      <span className="text-xl font-bold text-center">{items.title}</span>
      <ul className="text-center lg:text-left lg:pl-6 pt-6 pb-2 text-sky-600">
        {items.sousCat.map((cat, index) => {
          return (
            <li key={index}>
              <Link to={cat.href} className="hover:text-sky-900">
                {cat.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

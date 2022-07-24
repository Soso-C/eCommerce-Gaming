import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

export default function CardBasket({ article }) {
  const navigate = useNavigate();
  const { removeItem, changeQty, setTotalPrice, cart } =
    useContext(CartContext);

  const [qty, setQty] = useState(article.quantity);

  // Permet de refresh la page quand quantity ajouté donc refresh totalPrice et qty
  useEffect(() => {
    setQty(article.quantity);
    setTotalPrice(
      cart
        .map((article) => {
          return article.quantity * article.price;
        })
        .reduce((prevsum, sum) => prevsum + sum) || []
    );
  }, [article.quantity, removeItem]);

  return (
    <div className="flex items-center hover:bg-gray-50 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-26">
          <img className="h-24" src={article?.image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span
            className="font-bold text-sm cursor-pointer hover:text-blue-800"
            onClick={() => navigate(`/article/${article?.id}`)}
          >
            {article?.name}
          </span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs flex w-fit"
            onClick={() => removeItem(article?.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <AiOutlineMinus
          className="cursor-pointer"
          onClick={() => changeQty(article?.id, "DECREMENT")}
        />

        <span className="mx-2 border text-center w-8">{qty}</span>

        <AiOutlinePlus
          className="cursor-pointer"
          onClick={() => changeQty(article?.id, "INCREMENT")}
        />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {article?.price}€
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {article?.price * article?.quantity}€
      </span>
    </div>
  );
}

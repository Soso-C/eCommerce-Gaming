import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoStarSharp, IoChatbubbles } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function TopMainBanner() {
  return (
    <div className="hidden md:flex md:justify-between md:items-center mx-auto max-w-7xl text-sm lg:text-base py-8 px-4">
      <div className="flex items-center gap-2 lg:gap-5">
        <IoStarSharp className="w-8 h-8 lg:w-9 lg:h-9 text-zinc-800" />
        <span className="flex flex-col text-center">
          15 ans d'expertise
          <span>à votre service</span>
        </span>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <FaShoppingCart className="w-8 h-8 lg:w-9 lg:h-9 text-zinc-800" />
        <span className="flex flex-col text-center">
          + de 10 000 références
          <span>choisies par nos experts</span>
        </span>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <IoChatbubbles className="w-8 h-8 lg:w-9 lg:h-9 text-zinc-800" />
        <span className="flex flex-col text-center">
          Une équipe clientèle
          <span>à votre écoute</span>
        </span>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <BsFillCreditCardFill className="w-8 h-8 lg:w-9 lg:h-9 text-zinc-800" />
        <span className="flex flex-col text-center">
          Le débit de votre carte
          <span>à l'expédition</span>
        </span>
      </div>
    </div>
  );
}

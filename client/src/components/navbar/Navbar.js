import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleSb, setToggleSb] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };
  const showSearchBar = () => {
    setToggleSb(!toggleSb);
  };

  // start mobile first plus facile
  return (
    <nav className={`fixed top-19 w-full bg-black items-center flex p-4 z-20`}>
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold md:w-auto cursor-pointer text-white -order-1">
          SC Shop
        </h1>
        {/* Burger */}
        <button
          className="flex justify-end md:hidden rounded order-4"
          onClick={showNav}
        >
          <AiOutlineMenu className="text-white w-8 h-8 flex justify-center items-center" />
        </button>
        {/* Searchbar */}
        <div
          className={`${
            toggleSb ? "block " : "hidden "
          } pt-4 mx-auto relative md:block order-5 md:order-2 md:pt-0 w-full md:w-1/3`}
        >
          <input
            className="bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
            type="search"
            name="search"
            placeholder="Rechercher"
          />
          <button className="absolute right-0 top-0 mt-6 mr-4 md:mt-2">
            <AiOutlineSearch className="h-6 w-6" />
          </button>
        </div>
        {/* Icons left */}
        <div className="flex md:gap-6 md:order-5">
          <button
            className="text-white border-l border-r border-white md:hidden px-1.5"
            onClick={showSearchBar}
          >
            <AiOutlineSearch className="w-8 h-8" />
          </button>
          <button className="flex md:flex-col items-center justify-center text-white border-r border-white md:border-none px-2">
            <AiOutlineShoppingCart className="w-8 h-8" />
            <span className="hidden md:block font-medium py-1">Panier</span>
          </button>
          <button className="flex md:flex-col items-center justify-center text-white border-r border-white md:border-none px-2">
            <VscAccount className="w-8 h-8" />
            <span className="hidden md:block font-medium py-1">Compte</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsSnapchat,
} from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="navbarBg mt-12">
      <div className="max-w-7xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">
        <div className="sm:items-center sm:justify-between sm:flex">
          <span className="block text-white text-xl font-medium">SC Shop</span>
          <div className="flex mt-8 space-x-6 text-white sm:mt-0">
            <button className="hover:opacity-75">
              <BsFacebook className="w-6 h-6" />
            </button>
            <button className="hover:opacity-75">
              <BsInstagram className="w-6 h-6" />
            </button>
            <button className="hover:opacity-75">
              <BsTwitter className="w-6 h-6" />
            </button>
            <button className="hover:opacity-75">
              <BsSnapchat className="w-6 h-6" />
            </button>
            <button className="hover:opacity-75">
              <BsGithub className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-12 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium text-amber-500">Qui sommes-nous ?</p>

            <ul className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Les magasins SC Shop
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Contactez nous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-amber-500">Nous rejoindre</p>

            <ul className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Vendez sur SC Shop
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Recrutement
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Réseaux sociaux
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-amber-500">Besoin d'aide ?</p>

            <ul className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Mode de livraison
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Modes de règlement
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Demander un retour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-amber-500">Information</p>

            <ul className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Plan du site
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Informations légales
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:opacity-75">
                  Données personnelles
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-white">&copy; 2022 SC Shop</p>
      </div>
    </footer>
  );
}

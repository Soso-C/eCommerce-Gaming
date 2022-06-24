import React from "react";
import composant from "../../../assets/categoryImage/cat-compo.png";
import ordinateur from "../../../assets/categoryImage/cat-pc.png";
import periph from "../../../assets/categoryImage/cat-periph.png";
import ison from "../../../assets/categoryImage/cat-ietson.png";

export default function CategoryBanner() {
  const category = [
    {
      category: "Ordinateur",
      sousCat: [
        "Ordinateur",
        "PC Portable",
        "PC Gamer",
        "MacBook",
        "Windows 11",
      ],
    },
    {},
    {},
    {},
  ];

  return (
    <div className="flex flex-col items-center justify-center md:flex-row max-w-7xl mx-auto pt-12 gap-4 px-4 text-zinc-800">
      <div className="bg-white h-full flex w-full md:w-1/4 flex-col rounded-md">
        <div className="w-full h-full">
          <img src={ordinateur} alt="" className="mx-auto" />
        </div>
        <span className="text-xl font-bold text-center">Ordinateur</span>
        <ul className="text-center md:text-left md:pl-6 pt-6 pb-2 text-sky-600">
          <li>Ordinateur</li>
          <li>PC Portable</li>
          <li>PC Gamer</li>
          <li>MacBook</li>
          <li>Windows 11</li>
        </ul>
      </div>
      <div className="bg-white h-full flex w-full md:w-1/4 flex-col rounded-md">
        <div className="w-full h-full">
          <img src={composant} alt="" className="mx-auto" />
        </div>
        <span className="text-xl font-bold text-center">Composant PC</span>
        <ul className="text-center md:text-left md:pl-6 pt-6 pb-2 text-sky-600">
          <li>Carte Graphique</li>
          <li>Carte Mere</li>
          <li>Processeur</li>
          <li>Barrete Mémoire</li>
          <li>Disque Dur</li>
        </ul>
      </div>
      <div className="bg-white h-full flex w-full md:w-1/4 flex-col rounded-md">
        <div className="w-full h-full">
          <img src={periph} alt="" className="mx-auto" />
        </div>
        <span className="text-xl font-bold text-center">Periphérique PC</span>
        <ul className="text-center md:text-left md:pl-6 pt-6 pb-2 text-sky-600">
          <li>Ecran</li>
          <li>Clavier</li>
          <li>Casque</li>
          <li>Souris</li>
          <li>Tapis de souris</li>
        </ul>
      </div>
      <div className="bg-white h-full flex w-full md:w-1/4 flex-col rounded-md">
        <div className="w-full h-full">
          <img src={ison} alt="" className="mx-auto" />
        </div>
        <span className="text-xl font-bold text-center">Image & Son</span>
        <ul className="text-center md:text-left md:pl-6 pt-6 pb-2 text-sky-600">
          <li>TV</li>
          <li>Home Cinéma</li>
          <li>Téléphone</li>
          <li>Projecteur</li>
          <li>Casque Audio</li>
        </ul>
      </div>
    </div>
  );
}

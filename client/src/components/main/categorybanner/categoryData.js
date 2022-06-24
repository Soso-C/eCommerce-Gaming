import { v4 as uuidv4 } from "uuid";

const categoryProducts = [
  {
    title: "Ordinateur",
    img: "./categoryImage/cat-pc.png",
    sousCat: [
      { category: "Ordinateur", href: "/ordinateur" },
      { category: "PC Portable", href: "/ordinateur/pc-portable" },
      { category: "PC Gamer", href: "/ordinateur/pc-gamer" },
      { category: "MacBook / iMac", href: "/ordinateur/mac" },
      { category: "Windows 11", href: "/ordinateur/win11" },
    ],
    id: uuidv4(),
  },
  {
    title: "Composant PC",
    img: "./categoryImage/cat-compo.png",
    sousCat: [
      { category: "Carte Graphique", href: "/composant-pc/gpu" },
      { category: "Carte Mère", href: "/composant-pc/carte-mere" },
      { category: "Processeur", href: "/composant-pc/cpu" },
      { category: "Barette Mémoire", href: "/composant-pc/ram" },
      { category: "Disque Dur", href: "/composant-pc/hdd" },
    ],
    id: uuidv4(),
  },
  {
    title: "Périphérique PC",
    img: "./categoryImage/cat-periph.png",
    sousCat: [
      { category: "Ecran", href: "/periph/ecran" },
      { category: "Clavier", href: "/periph/clavier" },
      { category: "Casque", href: "/periph/casque" },
      { category: "Souris", href: "/periph/mouse" },
      { category: "Tapis de souris", href: "/periph/mousepad" },
    ],
    id: uuidv4(),
  },
  {
    title: "Image & Son",
    img: "./categoryImage/cat-ietson.png",
    sousCat: [
      { category: "TV", href: "/image-et-son/tv" },
      { category: "Home Cinéma", href: "/image-et-son/home-cinema" },
      { category: "Téléphone", href: "/image-et-son/phone" },
      { category: "Projecteur", href: "/image-et-son/projecteur" },
      { category: "Casque Audio", href: "/image-et-son/casque" },
    ],
    id: uuidv4(),
  },
];

export default categoryProducts;

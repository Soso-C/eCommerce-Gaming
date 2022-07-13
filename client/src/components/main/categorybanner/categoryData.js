import { v4 as uuidv4 } from "uuid";

const categoryProducts = [
  {
    title: "Ordinateur",
    img: "./categoryImage/cat-pc.png",
    sousCat: [
      { category: "Ordinateur", href: "/category/ordinateur" },
      { category: "PC Portable", href: "/category/pc-portable" },
      { category: "PC Gamer", href: "/category/pc-gamer" },
      { category: "MacBook / iMac", href: "/category/mac" },
      { category: "Windows 11", href: "/category/win11" },
    ],
    id: uuidv4(),
  },
  {
    title: "Composant PC",
    img: "./categoryImage/cat-compo.png",
    sousCat: [
      { category: "Carte Graphique", href: "/category/carte-graphique" },
      { category: "Carte Mère", href: "/category/carte-mere" },
      { category: "Processeur", href: "/category/processeur" },
      { category: "Barette Mémoire", href: "/category/barette-memoire" },
      { category: "Disque Dur / SSD", href: "/category/disque-dur-ssd" },
    ],
    id: uuidv4(),
  },
  {
    title: "Périphérique PC",
    img: "./categoryImage/cat-periph.png",
    sousCat: [
      { category: "Ecran", href: "category/ecran" },
      { category: "Clavier", href: "category/clavier" },
      { category: "Casque", href: "category/casque-pc" },
      { category: "Souris", href: "category/souris" },
      { category: "Tapis de souris", href: "category/tapis-souris" },
    ],
    id: uuidv4(),
  },
  {
    title: "Image & Son",
    img: "./categoryImage/cat-ietson.png",
    sousCat: [
      { category: "TV", href: "category/tv" },
      { category: "Home Cinéma", href: "category/home-cinema" },
      { category: "Téléphone", href: "category/telephone" },
      { category: "Projecteur", href: "category/projecteur" },
      { category: "Casque Audio", href: "category/casque-audio" },
    ],
    id: uuidv4(),
  },
];

export default categoryProducts;

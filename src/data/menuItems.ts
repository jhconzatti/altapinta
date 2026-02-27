import { MenuItem } from "@/types/menu";
import heroBurger from "@/assets/hero-burger.jpg";
import patySimple from "@/assets/paty-simple.jpeg";
import patyDoble from "@/assets/paty-doble.jpeg";
import cocaCola from "@/assets/coca-cola.png";
import cocoImg from "@/assets/coco.png";
import limonada from "@/assets/limonada-con-menta-y-gengibre.png";
import maracuya from "@/assets/maracuya.png";
import guacamole from "@/assets/guacamole.jpeg";
import choclo from "@/assets/choclo.jpeg";
import criolla from "@/assets/criolla.jpeg";
import mayonesaApio from "@/assets/mayonesa-de-apio.jpeg";
import cheddar from "@/assets/cheddar.jpeg";
import sandwichMila from "@/assets/sándwich-de-mila.jpeg";
import hamburger from "@/assets/burger-classic.jpg";
import papas from "@/assets/papas.jpeg";
import papasAborizadas from "@/assets/papas-saborizadas.jpeg";
import napo from "@/assets/napo.jpeg";
import milaAlPlato from "@/assets/mila-al-plato-3-personas.jpeg";

export const heroBurgerImage = heroBurger;

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "PATY SIMPLE",
    price: 6000,
    description: "Huevo, Jamón, Queso, Lechuga, Tomate",
    image: patySimple,
    category: "sandwiches",
  },
  {
    id: 2,
    name: "PATY DOBLE",
    price: 8000,
    description: "Doble huevo, Doble jamón, Doble queso, Lechuga, Tomate",
    image: patyDoble,
    category: "sandwiches",
  },
  {
    id: 3,
    name: "COCA-COLA",
    price: 2500,
    description: "Bebida refrescante",
    image: cocaCola,
    category: "bebidas",
  },
  {
    id: 4,
    name: "LIMONADA MENTA Y JENGIBRE",
    price: 1600,
    description: "Bebida natural refrescante",
    image: limonada,
    category: "bebidas",
  },
  {
    id: 5,
    name: "MARACUYÁ",
    price: 600,
    description: "Bebida tropical",
    image: maracuya,
    category: "bebidas",
  },
  {
    id: 6,
    name: "COCO",
    price: 600,
    description: "Bebida tropical",
    image: cocoImg,
    category: "bebidas",
  },
  {
    id: 7,
    name: "GUACAMOLE",
    price: 1500,
    description: "Salsa premium",
    image: guacamole,
    category: "salsas",
  },
  {
    id: 8,
    name: "CHOCLO",
    price: 1200,
    description: "Salsa tradicional",
    image: choclo,
    category: "salsas",
  },
  {
    id: 9,
    name: "CRIOLLA",
    price: 1200,
    description: "Salsa casera",
    image: criolla,
    category: "salsas",
  },
  {
    id: 10,
    name: "MAYONESA DE APÍO",
    price: 1200,
    description: "Salsa especial",
    image: mayonesaApio,
    category: "salsas",
  },
  {
    id: 11,
    name: "SÁNDWICH DE MILA",
    price: 7500,
    description: "Mila jugosa con ingredientes frescos",
    image: sandwichMila,
    category: "sandwiches",
  },
  {
    id: 13,
    name: "NAPO",
    price: 8500,
    description: "Sándwich napolitano con jamón y queso",
    image: napo,
    category: "sandwiches",
  },
  {
    id: 14,
    name: "PAPAS",
    price: 1000,
    description: "Porción de papas fritas",
    image: papas,
    category: "acompanhamientos",
  },
  {
    id: 15,
    name: "PAPAS SABORIZADAS",
    price: 1500,
    description: "Papas fritas condimentadas",
    image: papasAborizadas,
    category: "acompanhamientos",
  },
  {
    id: 16,
    name: "CHEDDAR",
    price: 500,
    description: "Queso fundido de cheddar",
    image: cheddar,
    category: "acompanhamientos",
  },
  {
    id: 18,
    name: "MILA AL PLATO PARA 3 PERSONAS",
    price: 15000,
    description: "Mila generosa para compartir",
    image: milaAlPlato,
    category: "platos",
  },
];

import puzzlesImg from "../../images/puzzle.jpeg";
import printsImg from "../../images/prints.jpg";
import thermosImg from "../../images/thermos.jpeg";
import minibookImg from "../../images/minibook.jpg";
import photocardsImg from "../../images/cards.jpg";

const SHOP_DATA = [
  {
    id: 1,
    title: "Puzzles",
    routeName: "puzzles",
    items: [
      {
        id: 1,
        name: "Central Park",
        imageUrl: puzzlesImg,
        price: 25,
      },
      {
        id: 2,
        name: "NYBG",
        imageUrl: puzzlesImg,
        price: 18,
      },
      {
        id: 3,
        name: "Wave Hill",
        imageUrl: puzzlesImg,
        price: 35,
      },
      {
        id: 4,
        name: "BBG",
        imageUrl: puzzlesImg,
        price: 25,
      },
      {
        id: 5,
        name: "Central Park",
        imageUrl: puzzlesImg,
        price: 18,
      },
      {
        id: 6,
        name: "NYBG",
        imageUrl: puzzlesImg,
        price: 14,
      },
      {
        id: 7,
        name: "BBG",
        imageUrl: puzzlesImg,
        price: 18,
      },
      {
        id: 8,
        name: "Central Park",
        imageUrl: puzzlesImg,
        price: 14,
      },
      {
        id: 9,
        name: "New York",
        imageUrl: puzzlesImg,
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "photo prints",
    routeName: "photo prints",
    items: [
      {
        id: 1,
        name: "New York",
        imageUrl: printsImg,
        price: 220,
      },
      {
        id: 2,
        name: "Culebra",
        imageUrl: printsImg,
        price: 280,
      },
      {
        id: 3,
        name: "New York",
        imageUrl: printsImg,
        price: 110,
      },
      {
        id: 4,
        name: "Corals",
        imageUrl: printsImg,
        price: 160,
      },
      {
        id: 5,
        name: "Corals",
        imageUrl: printsImg,
        price: 160,
      },
      {
        id: 6,
        name: "Corals",
        imageUrl: printsImg,
        price: 160,
      },
      {
        id: 7,
        name: "Corals",
        imageUrl: printsImg,
        price: 190,
      },
      {
        id: 8,
        name: "New York",
        imageUrl: printsImg,
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Thermos",
    routeName: "thermos",
    items: [
      {
        id: 1,
        name: "New York",
        imageUrl: thermosImg,
        price: 125,
      },
      {
        id: 2,
        name: "Colorado",
        imageUrl: thermosImg,
        price: 90,
      },
      {
        id: 3,
        name: "Aspen",
        imageUrl: thermosImg,
        price: 90,
      },
      {
        id: 4,
        name: "Snowmass",
        imageUrl: thermosImg,
        price: 165,
      },
      {
        id: 5,
        name: "Ukraine",
        imageUrl: thermosImg,
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Mini Book",
    routeName: "mini book",
    items: [
      {
        id: 1,
        name: "Colorado",
        imageUrl: minibookImg,
        price: 25,
      },
      {
        id: 2,
        name: "New York",
        imageUrl: minibookImg,
        price: 20,
      },
      {
        id: 3,
        name: "Aspen",
        imageUrl: minibookImg,
        price: 80,
      },
      {
        id: 4,
        name: "Snowmass",
        imageUrl: minibookImg,
        price: 80,
      },
      {
        id: 5,
        name: "Culebra",
        imageUrl: minibookImg,
        price: 45,
      },
      {
        id: 6,
        name: "Culebra",
        imageUrl: minibookImg,
        price: 135,
      },
      {
        id: 7,
        name: "Culebrita",
        imageUrl: minibookImg,
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Photo Cards",
    routeName: "photo cards",
    items: [
      {
        id: 1,
        name: "Macro",
        imageUrl: photocardsImg,
        price: 325,
      },
      {
        id: 2,
        name: "Landscape",
        imageUrl: photocardsImg,
        price: 20,
      },
      {
        id: 3,
        name: "Black & White",
        imageUrl: photocardsImg,
        price: 25,
      },
      {
        id: 4,
        name: "Abstract",
        imageUrl: photocardsImg,
        price: 25,
      },
      {
        id: 5,
        name: "Macro",
        imageUrl: photocardsImg,
        price: 40,
      },
      {
        id: 6,
        name: "Closeups",
        imageUrl: photocardsImg,
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;

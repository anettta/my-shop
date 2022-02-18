// import puzzlesImg from "../../images/puzzle.jpeg";
import printsImg from "../../images/prints.jpg";
// import thermosImg from "../../images/thermos.jpeg";
// import minibookImg from "../../images/minibook.jpg";
import photocardsImg from "../../images/cards.jpg";

const SHOP_DATA = [
  {
    id: 1,
    title: "Fine Art Prints",
    routeName: "fineartprints",
    items: [
      {
        id: 1.1,
        name: "Central Park",
        imageUrl: printsImg,
        price: 25,
      },
      {
        id: 1.2,
        name: "NYBG",
        imageUrl: printsImg,
        price: 18,
      },
      // {
      //   id: 1.3,
      //   name: "Wave Hill",
      //   imageUrl: puzzlesImg,
      //   price: 35,
      // },
      // {
      //   id: 1.4,
      //   name: "BBG",
      //   imageUrl: puzzlesImg,
      //   price: 25,
      // },
      // {
      //   id: 1.5,
      //   name: "Central Park",
      //   imageUrl: puzzlesImg,
      //   price: 18,
      // },
      // {
      //   id: 1.6,
      //   name: "NYBG",
      //   imageUrl: puzzlesImg,
      //   price: 14,
      // },
      // {
      //   id: 1.7,
      //   name: "BBG",
      //   imageUrl: puzzlesImg,
      //   price: 18,
      // },
      // {
      //   id: 1.8,
      //   name: "Central Park",
      //   imageUrl: puzzlesImg,
      //   price: 14,
      // },
      // {
      //   id: 1.9,
      //   name: "New York",
      //   imageUrl: puzzlesImg,
      //   price: 16,
      // },
    ],
  },
  {
    id: 2,
    title: "Photo Cards",
    routeName: "photocards",
    items: [
      {
        id: 2.1,
        name: "New York",
        imageUrl: photocardsImg,
        price: 220,
      },
      {
        id: 2.2,
        name: "Culebra",
        imageUrl: photocardsImg,
        price: 280,
      },
      // {
      //   id: 2.3,
      //   name: "New York",
      //   imageUrl: printsImg,
      //   price: 110,
      // },
      // {
      //   id: 2.4,
      //   name: "Corals",
      //   imageUrl: printsImg,
      //   price: 160,
      // },
      // {
      //   id: 2.5,
      //   name: "Corals",
      //   imageUrl: printsImg,
      //   price: 160,
      // },
      // {
      //   id: 2.6,
      //   name: "Corals",
      //   imageUrl: printsImg,
      //   price: 160,
      // },
      // {
      //   id: 2.7,
      //   name: "Corals",
      //   imageUrl: printsImg,
      //   price: 190,
      // },
      // {
      //   id: 2.8,
      //   name: "New York",
      //   imageUrl: printsImg,
      //   price: 200,
      // },
    ],
  },
  // {
  //   id: 3,
  //   title: "Thermos",
  //   routeName: "thermos",
  //   items: [
  //     {
  //       id: 3.1,
  //       name: "New York",
  //       imageUrl: thermosImg,
  //       price: 125,
  //     },
  // {
  //   id: 3.2,
  //   name: "Colorado",
  //   imageUrl: thermosImg,
  //   price: 90,
  // },
  // {
  //   id: 3.3,
  //   name: "Aspen",
  //   imageUrl: thermosImg,
  //   price: 90,
  // },
  // {
  //   id: 3.4,
  //   name: "Snowmass",
  //   imageUrl: thermosImg,
  //   price: 165,
  // },
  // {
  //   id: 3.5,
  //   name: "Ukraine",
  //   imageUrl: thermosImg,
  //   price: 185,
  // },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Mini Book",
  //   routeName: "mini book",
  //   items: [
  //     {
  //       id: 4.1,
  //       name: "Colorado",
  //       imageUrl: minibookImg,
  //       price: 25,
  //     },
  //     {
  //       id: 4.2,
  //       name: "New York",
  //       imageUrl: minibookImg,
  //       price: 20,
  //     },
  // {
  //   id: 4.3,
  //   name: "Aspen",
  //   imageUrl: minibookImg,
  //   price: 80,
  // },
  // {
  //   id: 4.4,
  //   name: "Snowmass",
  //   imageUrl: minibookImg,
  //   price: 80,
  // },
  // {
  //   id: 4.5,
  //   name: "Culebra",
  //   imageUrl: minibookImg,
  //   price: 45,
  // },
  // {
  //   id: 4.6,
  //   name: "Culebra",
  //   imageUrl: minibookImg,
  //   price: 135,
  // },
  // {
  //   id: 4.7,
  //   name: "Culebrita",
  //   imageUrl: minibookImg,
  //   price: 20,
  // },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Photo Cards",
  //   routeName: "photo cards",
  //   items: [
  //     {
  //       id: 5.1,
  //       name: "Macro",
  //       imageUrl: photocardsImg,
  //       price: 325,
  //     },
  // {
  //   id: 5.2,
  //   name: "Landscape",
  //   imageUrl: photocardsImg,
  //   price: 20,
  // },
  // {
  //   id: 5.3,
  //   name: "Black & White",
  //   imageUrl: photocardsImg,
  //   price: 25,
  // },
  // {
  //   id: 5.4,
  //   name: "Abstract",
  //   imageUrl: photocardsImg,
  //   price: 25,
  // },
  // {
  //   id: 5.5,
  //   name: "Macro",
  //   imageUrl: photocardsImg,
  //   price: 40,
  // },
  // {
  //   id: 5.6,
  //   name: "Closeups",
  //   imageUrl: photocardsImg,
  //   price: 25,
  // },
  //   ],
  // },
];

export default SHOP_DATA;

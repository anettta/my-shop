// import puzzlesImg from "../images/puzzle.jpeg";
import printsImg from "../images/prints.jpg";
// import thermosImg from "../images/thermos.jpeg";
// import minibookImg from "../images/minibook.jpg";
import photocardsImg from "../images/cards.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "Fine Art Prints",
      imageUrl: printsImg,
      id: 1,
      size: "large",
      linkUrl: "/shop/fineartprints",
    },
    // {
    //   title: "Photo Cards",
    //   imageUrl: photocardsImg,
    //   size: "large",
    //   id: 2,
    //   linkUrl: "/shop/photocards",
    // },
    // {
    //   title: "thermos",
    //   imageUrl: thermosImg,
    //   size: "large",
    //   id: 3,
    //   linkUrl: "",
    // },
    // {
    //   title: "mini book",
    //   imageUrl: minibookImg,
    //   size: "large",
    //   id: 4,
    //   linkUrl: "",
    // },
    // {
    //   title: "photo cards",
    //   imageUrl: photocardsImg,
    //   size: "large",
    //   id: 5,
    //   linkUrl: "cards",
    // },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

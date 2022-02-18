import React from "react";
import MenuItem from "./menu-item.js";
import "../styles/directory.styles.scss";
// import puzzlesImg from "../images/puzzle.jpeg";
import printsImg from "../images/prints.jpg";
// import thermosImg from "../images/thermos.jpeg";
// import minibookImg from "../images/minibook.jpg";
import photocardsImg from "../images/cards.jpg";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "photo prints",
          imageUrl: printsImg,
          id: 1,
          size: "large",
          linkUrl: "",
        },
        {
          title: "photo cards",
          imageUrl: photocardsImg,
          size: "large",
          id: 2,
          linkUrl: "",
        },
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
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

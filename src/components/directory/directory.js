import React from "react";
import MenuItem from "../menu-item/menu-item.js";
import "../directory/directory.styles.scss";
import puzzlesImg from "../directory/puzzle.jpeg";
import printsImg from "../directory/prints.jpg";
import thermosImg from "../directory/thermos.jpeg";
import minibookImg from "../directory/minibook.jpg";
import photocardsImg from "../directory/cards.jpg";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "puzzles",
          imageUrl: puzzlesImg,
          id: 1,

          linkUrl: "",
        },
        {
          title: "photo prints",
          imageUrl: printsImg,

          id: 2,
          linkUrl: "",
        },
        {
          title: "thermos",
          imageUrl: thermosImg,

          id: 3,
          linkUrl: "",
        },
        {
          title: "mini book",
          imageUrl: minibookImg,
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "photo cards",
          imageUrl: photocardsImg,
          size: "large",
          id: 4,
          linkUrl: "cards",
        },
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

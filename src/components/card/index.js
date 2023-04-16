import React from "react";
import {
  CardContainer,
  CardContentContainer,
  CardImage,
  CardImageContainer,
} from "./card-styled";
import IMAGE_1 from "../../assests/images/1.png";
import IMAGE_2 from "../../assests/images/2.jpg";
import IMAGE_3 from "../../assests/images/3.jpg";
import IMAGE_4 from "../../assests/images/4.jpg";
import IMAGE_5 from "../../assests/images/5.jpg";

const Card = ({ isReverse, index }) => {
  //constants
  const images = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5];
  return (
    <CardContainer direction={isReverse ? "row-reverse" : "row"}>
      <CardImageContainer>
        <CardImage src={images[index]} alt="card-image" />
      </CardImageContainer>
      <CardContentContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;

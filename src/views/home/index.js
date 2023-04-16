import React from "react";
import { CardsWrapper, HomeContainer } from "./home-styled";
import Card from "../../components/card";

const Home = () => {
  //constant
  const cards = [0, 1, 2, 3];

  return (
    <HomeContainer>
      <CardsWrapper>
        {cards.map((item, index) => (
          <Card key={index} index={index} isReverse={index % 2 === 0} />
        ))}
      </CardsWrapper>
    </HomeContainer>
  );
};

export default Home;

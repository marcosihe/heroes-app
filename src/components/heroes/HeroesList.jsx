import React, { useMemo } from "react";

import { Row } from "react-bootstrap";
import HeroCard from "./HeroCard";

import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

const HeroesList = ({ publisher }) => {
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ])

  return (
    <Row xs={1} md={3} className="g-4">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </Row>
  );
};

export default HeroesList;

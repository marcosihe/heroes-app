import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;

  return (
    <Col>
      <Card>
        <Card.Img vartiant="top" src={imagePath} alt={superhero} />
        <Card.Body>
          <Card.Title>{superhero}</Card.Title>
          <Card.Text>{alter_ego}</Card.Text>
          {alter_ego !== characters && (
            <p className="text-muted">{characters}</p>
          )}
          <Card.Text>
            {<small className="text-muted">{first_appearance}</small>}
          </Card.Text>
          <Link to={`/hero/${id}`}>Más info...</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HeroCard;

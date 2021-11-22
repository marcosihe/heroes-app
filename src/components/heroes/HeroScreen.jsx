import React, { useMemo } from "react";
import { Card, Image, ListGroup, Button } from "react-bootstrap";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1); // con -1 vuelve a la ruta anterior
  };

  return (
    <section className="d-flex mt-5 container">
      <figure>
        <Image src={imagePath} alt={superhero} thumbnail className="animate__animated animate__fadeInLeft w-50" />
      </figure>
      <article>
        <Card className="animate__animated animate__fadeIn mb-3">
          <Card.Body>
            <Card.Title variant="h3">{superhero}</Card.Title>
            <ListGroup>
              <ListGroup.Item variant="warning">
                Alter ego: {alter_ego}
              </ListGroup.Item>
              <ListGroup.Item variant="warning">
                Publisher: {publisher}
              </ListGroup.Item>
              <ListGroup.Item variant="warning">
                First Appearance: {first_appearance}
              </ListGroup.Item>
            </ListGroup>
            <Card.Text>
              {" "}
              Characters <br /> {characters}
            </Card.Text>
          </Card.Body>
        </Card>
        <Button variant="outline-info" onClick={handleReturn}>
          Go Back
        </Button>
      </article>
    </section>
  );
};

export default HeroScreen;

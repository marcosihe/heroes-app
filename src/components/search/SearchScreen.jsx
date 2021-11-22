import React, { useMemo } from "react";
import { Form, Button, Alert, Row } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../heroes/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const filteredHeroes = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
  };

  return (
    <section>
      <h1>Search</h1>
      <hr />
      <Form onSubmit={handleSearch}>
        <Form.Label>Search Hero</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type text here"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
        <Button variant="primary" className="mt-1" type="submit">
          Search
        </Button>
      </Form>

      <section>
        <h4>Results</h4>
        <hr />
        <Row xs={1} md={4} className="g-4">
        {
            (q === '') ? <Alert variant="info" >Search Hero</Alert>
            : ( filteredHeroes.length === 0 ) && <Alert variant="danger">0 Results for: { q }</Alert>
        }
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
        </Row >
      </section>
    </section>
  );
};

export default SearchScreen;

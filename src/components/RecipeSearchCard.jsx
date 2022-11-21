import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function RecipeSearchCard({ recipe }) {
  const shortSummary = recipe.summary.split(" ").splice(0, 20).join(" ");

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img orientation="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text
            className="cardText"
            dangerouslySetInnerHTML={{ __html: shortSummary }}
          ></Card.Text>
          <Link to={`/home/fullrecipe/`} state={{ value: recipe }}>
            <Button>See Recipe</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeSearchCard;

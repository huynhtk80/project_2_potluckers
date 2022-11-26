import React, { useState } from "react";
import theImage from "../img/potlucker-chocolate-cake.jpg";
import "./recipecard.css";
import { Link } from "react-router-dom";
import PopupRecipe from "./PopupRecipe";

function RecipeCard({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div style={{ width: "310px", marginBottom: "20px" }} className="cardR">
        <div className="cardR__side cardR__side--front">
          <div
            className="cardR__picture"
            style={{
              backgroundImage: `url(${recipe.image})`,
              backgroundSize: "cover",
              margin: "-20px -20px 0 -20px",
            }}
          >
            &nbsp;
          </div>
          <h4 className="cardR__heading">
            <span className="cardR__heading-span cardR__heading-span--1">
              {recipe.title}
            </span>
          </h4>
          <div className="cardR__details">
            <ul>
              <li>🍽️Servings: {recipe.servings}</li>
              <li>⏰Ready in: {recipe.readyInMinutes}mins</li>
            </ul>
          </div>
        </div>
        <div className="cardR__side cardR__side--back-1">
          <div className="cardR__cta">
            <Link
              to={`/home/fullrecipe/`}
              state={{ value: recipe }}
              className="btn btn--white"
            >
              Learn More
            </Link>
            <a onClick={() => setButtonPopup(true)} className="btn btn--white">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <PopupRecipe
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        recipe={recipe}
      />
    </>
  );
}

export default RecipeCard;

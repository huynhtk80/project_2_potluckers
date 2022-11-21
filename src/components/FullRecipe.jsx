import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RecipeSearchCard from "./RecipeSearchCard";

function FullRecipe() {
  const recipe = useLocation().state.value;
  console.log(recipe);
  return (
    <>
      <h1>{recipe.title}</h1>
      <p>{recipe.id}</p>
      <img src={recipe.image} alt="Recipe Photo"></img>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      {recipe.analyzedInstructions[0].steps.map((instructions, index) => (
        <p>
          {index + 1}. {instructions.step}
        </p>
      ))}
    </>
  );
}

export default FullRecipe;

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RecipeSearchCard from "./RecipeSearchCard";

function FullRecipe() {
  const recipe = useLocation().state.value;
  const cleanSummary = recipe.summary.split("All things considered")[0];
  console.log(recipe);
  return (
    <>
      <h1>{recipe.title}</h1>
      <p>{recipe.id}</p>
      <img src={recipe.image} alt="Recipe Photo"></img>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

      <p dangerouslySetInnerHTML={{ __html: cleanSummary }}></p>
      {recipe.analyzedInstructions[0].steps.map((instructions, index) => (
        <p>
          {index + 1}. {instructions.step}
        </p>
      ))}
    </>
  );
}

export default FullRecipe;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/recipeAPIs";

function FullRecipe() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const fetchedInformation = await getRecipeById(id);
        setRecipe(fetchedInformation);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();

    return () => {};
  }, []);
  console.log(recipe);
  if (!recipe) {
    return <h2>Not valid recipe id</h2>;
  }
  return (
    <>
      <h1>{recipe.title}</h1>
      <p>{recipe.id}</p>
      <img src={recipe.image} alt="Recipe Photo"></img>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <br></br>
      <h2>Instructions</h2>
      {recipe.analyzedInstructions[0].steps.map((instructions, index) => (
        <p>
          {index + 1}. {instructions.step}
        </p>
      ))}
      <br></br>
      <h2>Ingredients</h2>
      {recipe.extendedIngredients.map((ingredients, index) => (
        <p>
          {index + 1}. {ingredients.name} - {ingredients.measures.metric.amount}{" "}
          {ingredients.measures.metric.unitLong}
        </p>
      ))}
    </>
  );
}

export default FullRecipe;

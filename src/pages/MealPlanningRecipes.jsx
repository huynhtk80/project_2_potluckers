import React from "react";
import RecipeSearch from "../components/RecipeSearch";

function MealPlanningRecipes() {
  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1>Meal Planning and Recipes</h1>
            </span>

            <RecipeSearch />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MealPlanningRecipes;

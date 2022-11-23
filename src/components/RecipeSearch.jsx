import React, { useState } from "react";
import Box from "@mui/material/Box";
import Select from "react-select";
import { CUISINES, INTOLERANCES } from "./searchOptions";
import "./recipeSearch.css";
import { complexSearchGet } from "../api/recipeAPIs";
import RecipeSearchCard from "./RecipeSearchCard";

function RecipeSearch() {
  const [selectedIntolerances, setSelectedIntolerances] = useState(null);
  const [selectedCuisines, setSelectedCuisines] = useState(null);
  const [queryString, setQueryString] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await complexSearchGet(queryString);
    setResults(result.results);
  };

  return (
    <div className="formContainer">
      <form className="searchbox" onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          name="inputtext"
          type="text"
          onChange={(e) =>
            setQueryString({ name: e.target.name, value: e.target.value })
          }
        />
        {/* <div>
          <label>Intolerances: </label>
          <Select
            options={INTOLERANCES}
            isMulti={true}
            onChange={setSelectedIntolerances}
          />
        </div> */}
        {/* <div>
          <label>Cuisines: </label>
          <Select
            options={CUISINES}
            isMulti={true}
            onChange={setSelectedCuisines}
          />
        </div> */}
        <button>submit</button>
      </form>

      {results && <h2>Search Results</h2>}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {results && [
          results.map((r) => {
            return <RecipeSearchCard key={r.id} recipe={r} />;
          }),
        ]}
      </Box>
    </div>
  );
}

export default RecipeSearch;

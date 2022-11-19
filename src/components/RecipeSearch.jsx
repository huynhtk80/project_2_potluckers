import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { CUISINES, INTOLERANCES } from "./searchOptions";
import "./recipeSearch.css";
import { complexSearchGet } from "../api/recipeAPIs";

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
      <h2>recipeSearch</h2>
      <form className="searchbox" onSubmit={handleSubmit}>
        <label>Intolerances: </label>
        <Select
          options={INTOLERANCES}
          isMulti={true}
          onChange={setSelectedIntolerances}
        />
        <label>Cuisines: </label>
        <Select
          options={CUISINES}
          isMulti={true}
          onChange={setSelectedCuisines}
        />
        <label>Query String</label>
        <input
          name="inputtext"
          type="text"
          onChange={(e) =>
            setQueryString({ name: e.target.name, value: e.target.value })
          }
        />
        <input
          name="info"
          type="checkbox"
          onChange={(e) =>
            setQueryString({ name: e.target.name, value: e.target.value })
          }
        />
        <button>submit</button>
      </form>
      <h2>Search Results</h2>
      {results && [
        results.map((r, index) => {
          return (
            <p>
              {index + 1} Title: {r.title}
            </p>
          );
        }),
      ]}
    </div>
  );
}

export default RecipeSearch;

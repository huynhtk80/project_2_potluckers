import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { CUISINES, INTOLERANCES } from "./searchOptions";

function RecipeSearch() {
  const [selectedIntolerances, setSelectedIntolerances] = useState(null);
  const [selectedCuisines, setSelectedCuisines] = useState(null);
  const [queryString, setQueryString] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <div>recipeSearch</div>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}> */}
      <form onSubmit={handleSubmit2}>
        <label>Intolerances</label>
        <Select
          options={INTOLERANCES}
          isMulti={true}
          onChange={setSelectedIntolerances}
        />
        <Select
          options={CUISINES}
          isMulti={true}
          onChange={setSelectedCuisines}
        />
        <label>Query String</label>
        <input {...register("foodquery")} />
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
        {console.log(queryString)}
        <button>submit</button>
      </form>
      <p>hello{JSON.stringify(selectedIntolerances)}</p>
    </div>
  );
}

export default RecipeSearch;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getexistingPotluck as getExistingPotluck } from "../api/potluckAPI";
import FullFeaturedCrudGrid from "./datatable";

function NewPotluck() {
  const [test, setTest] = useState(false);
  const [potluck, setPotluck] = useState("");
  const potluckId = useParams().id;

  return (
    <>
      <div>New Potluck</div>
      <p>637c0da9d222fe5ec52c7255</p>
    </>
  );
}

export default NewPotluck;

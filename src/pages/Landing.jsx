import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div>
        <span className="title-main">
          <h1>Potluckers Landing</h1>
        </span>
      </div>
      <Link to="/home">Home</Link>
    </>
  );
}

export default Landing;

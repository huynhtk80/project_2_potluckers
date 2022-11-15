import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1>404 Page Not Found</h1>
              <p>
                <Link to="/home">Go Home</Link>
              </p>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Notfound;

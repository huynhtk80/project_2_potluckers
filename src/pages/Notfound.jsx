import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("home"), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1>404 Page Not Found</h1>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Notfound;

import React, { useState } from "react";
import "./PlayingNavBar.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import longLogo from "../img/logo2.png";

function PlayingNavBar() {
  let [loginStatus, setLoginStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(false);
  };
  return (
    <>
      <div className="navigationP">
        <input
          type="checkbox"
          className="navigationP__checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigationP__button">
          <span className="navigationP__icon">&nbsp;</span>
        </label>

        <div className="navigationP__background">&nbsp;</div>

        <nav className="navigationP__nav">
          <img src={longLogo} className="logoimage" />
          <ul className="navigationP__list">
            <li className="navigationP__item">
              <HashLink
                to="#popular-mains"
                className="navigationP__link"
                onClick={handleChange}
              >
                Home
              </HashLink>
            </li>
            <li className="navigationP__item">
              <HashLink
                to="#popular-deserts"
                className="navigationP__link"
                onClick={handleChange}
              >
                Plan Your Own Event
              </HashLink>
            </li>
            <li className="navigationP__item">
              <HashLink
                to="#learn-about-potlucker"
                className="navigationP__link"
                onClick={handleChange}
              >
                Existing Events
              </HashLink>
            </li>
            <li className="navigationP__item">
              <HashLink
                to="#meet-the-team"
                className="navigationP__link"
                onClick={handleChange}
              >
                Find New Recipes
              </HashLink>
            </li>
            <li className="navigationP__item">
              <HashLink
                to="#refer-someone"
                className="navigationP__link"
                onClick={handleChange}
              >
                About Us
              </HashLink>
            </li>
            <li className="navigationP__item">
              <HashLink
                to="#refer-someone"
                className="navigationP__link"
                onClick={handleChange}
              >
                Register/Login
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="movedown">
        <Outlet />
      </div>
    </>
  );
}

export default PlayingNavBar;

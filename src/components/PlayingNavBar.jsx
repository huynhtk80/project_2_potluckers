import React, { useState } from "react";
import "./PlayingNavBar.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import longLogo from "../img/PotluckerBlackLandscape.png";
import { Footer } from "./Footer";

function PlayingNavBar() {
  let [loginStatus, setLoginStatus] = useState(true);
  let [name, setName] = useState();

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {};
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
          <Link to="/home" className="logoimage">
            <img src={longLogo} className="logoimage" />
          </Link>
          <ul className="navigationP__list">
            <li className="navigationP__item">
              <NavLink
                to="/home"
                className="navigationP__link"
                onClick={handleChange}
              >
                Home
              </NavLink>
            </li>
            {loginStatus ? (
              <li className="navigationP__item">
                <NavLink
                  to="/home/PlanYourOwnEvent"
                  className="navigationP__link"
                  onClick={handleChange}
                >
                  Create Event
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li className="navigationP__item">
              <NavLink
                to="/home/ExistingEvents"
                className="navigationP__link"
                onClick={handleChange}
              >
                Existing Events
              </NavLink>
            </li>
            <li className="navigationP__item">
              <NavLink
                to="/home/MealPlanningRecipes"
                className="navigationP__link"
                onClick={handleChange}
              >
                Find Recipes
              </NavLink>
            </li>
            <li className="navigationP__item">
              <NavLink
                to="/home/Aboutus"
                className="navigationP__link"
                onClick={handleChange}
              >
                About Us
              </NavLink>
            </li>
            <li className="navigationP__item">
              <NavLink
                to="/sign-up"
                className="navigationP__link"
                onClick={handleChange}
              >
                Register/Login
              </NavLink>
            </li>
            <li className="navigationP__item">
              <NavLink
                to="/home/UserDetails"
                className="navigationP__link"
                onClick={handleChange}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="movedown">
        <Outlet />
      </div>
      <div style={{ marginTop: "50%", clear: "both" }}>
        <Footer />
      </div>
    </>
  );
}

export default PlayingNavBar;

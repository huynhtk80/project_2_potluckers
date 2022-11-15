import React, { useState } from "react";
import "./navigation.css";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar() {
  let [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <div id="header-background">
        {/* login test hide test: https://reactjs.org/docs/conditional-rendering.html*/}
        {loginStatus && (
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/Dashboard">Log In/Sign Up</Link>
                </li>
              </ul>
            </nav>
          </header>
        )}
        <header id="nav-header">
          <h1>
            <NavLink to="/home" id="nav-logo">
              LOGO
            </NavLink>
          </h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/home/PlanYourOwnEvent">
                  Plan Your Own Event
                </NavLink>
              </li>
              <li>
                <NavLink to="/home/MealPlanningRecipes">
                  Meal Planning/Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/home/ExistingEvents">Existing Events</NavLink>
              </li>
              <li>
                <NavLink to="/home/Aboutus">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

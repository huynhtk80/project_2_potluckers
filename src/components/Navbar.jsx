import React, { useState } from "react";
import "./navigation.css";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar() {
  let [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <div id="header-background">
        <header id="nav-header">
          <h1>
            <NavLink to="/home" id="nav-logo">POTLUCKER</NavLink>
          </h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/home/PlanYourOwnEvent">Plan Your Own Event</NavLink>
              </li>
              <li>
                <NavLink to="/home/ExistingEvents">Existing Events</NavLink>
              </li>
              <li>
                <NavLink to="/home/MealPlanningRecipes">Find New Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/home/Aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Log In/Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/UserDetails">User Settings</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="movedown">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;

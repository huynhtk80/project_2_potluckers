import React from "react";
import "./navigation.css";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div id="header-background">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/Dashboard">Log In/Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header id="nav-header">
        <h1>
          <NavLink to="/" id="nav-logo">
            LOGO
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/PlanYourOwnEvent">Plan Your Own Event</NavLink>
            </li>
            <li>
              <NavLink to="/MealPlanningRecipes">Meal Planning/Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/ExistingEvents">Existing Events</NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus">About Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;

import React from "react";
import "./navigation.css";
import { Outlet, Link } from "react-router-dom";

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
          <Link to="/" id="nav-logo">
            LOGO
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/" class="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/PlanYourOwnEvent">Plan Your Own Event</Link>
            </li>
            <li>
              <Link to="/MealPlanningRecipes">Meal Planning/Recipes</Link>
            </li>
            <li>
              <Link to="/ExistingEvents">Existing Events</Link>
            </li>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;

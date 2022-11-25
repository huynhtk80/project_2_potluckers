import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";

function Aboutus() {
  return (
    <div id="SuperWrap">
      <div className="container2">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1 className="romell">About Us</h1>
            </span>
            <p className="romell">
              About Potlockers Organizing potlucks is hard. You need to know
              allergies, preferences, cutlery, clean-up crew and much more. Life
              is already hard but organizing potlock doesn’t have to be. What if
              we tell you that there is an app to make your life easier? Well,
              we present to you the Potlockers app. This application is made by
              the Kamikaze Cheese Team and our goal is to make organizing
              potlucks easy and convenient. Coming from the struggles we have on
              creating potluck during our study in InceptionU, it is our mission
              to deliver food goodness to everybody in a quick and easy manner.
            </p>
            <br />
            <p>The art of good Food</p>
            <br />
            <p>
              Our team core value is food and doing good. The Potlockers app
              will allow you to add/remove foods from your potlock list. In
              addition, you can look up recipes for the food your are bringing,
              organize who brings in the cutlery, organize who cleans-up after
              the event, exclude certain types of food because of allergies and
              other additional features. We hope that by using our app, eating
              food with the people you cherish can create great experiences they
              can never forget. Bon appétit!
            </p>
            <br />
            <p>Good Food. Combine. </p>
            <br />
            <p>
              <Link to="/home/PlanYourOwnEvent">Plan Your Own Event</Link>
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

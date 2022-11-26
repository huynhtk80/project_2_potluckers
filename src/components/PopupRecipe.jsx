import React from "react";
import kWings from "../img/potlucker-kamikaze-wings.jpg";
import { Link } from "react-router-dom";
import "./PopupRecipe.css";

function PopupRecipe(props) {
  return props.trigger ? (
    <>
      <div className="popupR" id="popupR">
        <div className="popupR__content">
          <a onClick={() => props.setTrigger(false)} className="popupR__close">
            &times;
          </a>
          <div className="popupR__left">
            <img
              src={props.recipe.image}
              alt="Tour photo"
              className="popupR__img"
            />
          </div>

          {/* <div className="popupR__right_top">
            <h2>{props.recipe.title}</h2>
          </div> */}

          <div className="popupR__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              {props.recipe.title}
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Always A Hit &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popupR__text">
              {props.recipe.analyzedInstructions[0].steps.map(
                (instructions, index) => (
                  <>
                    <p>
                      {index + 1}. {instructions.step}
                    </p>
                    <br></br>
                  </>
                )
              )}
            </p>
            <Link to="/home" className="btn btn--green">
              Save to Favorites
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default PopupRecipe;

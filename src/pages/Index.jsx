import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <section className="section-tours">
      <h1>Learn More About Potlucker</h1>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--7">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Keeps Track Of Progress{" "}
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">
                    Tracks Everyone's Progress?
                  </p>
                  <p className="card__price-value">Fantastic!</p>
                </div>
                <a href="#popup7" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--8">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  Keeps Everyone Informed
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Everyone's Informed?</p>
                  <p className="card__price-value">So Great!</p>
                </div>
                <a href="#popup8" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--9">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  Creates Your Perfect Menus
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">The Perfect Menu?</p>
                  <p className="card__price-value">Spectacular!</p>
                </div>
                <a href="#popup9" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;

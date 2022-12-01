import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function ExistingEventsLanding() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id="SuperWrap">
        <div className="container">
          <div className="one">
            <h3 className="title flex-title">
              <span className="title-main">
                <h1 >
                  Existing Events
                </h1>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find an Event
                </h3>
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
                <a
                  onClick={handleClick}
                  className="btn btn--green"
                  style={{ padding: "10px" }}
                >
                  Search for event
                </a>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Upcoming Events
                </h3>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Previous Events
                </h3>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExistingEventsLanding;

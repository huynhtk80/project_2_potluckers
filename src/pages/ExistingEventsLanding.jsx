import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../pages/dashboard.css";
import Alert from "@mui/material/Alert";
import SearchPotluckAuto from "../components/SearchPotluckAuto";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function ExistingEventsLanding() {
  const navigate = useNavigate();
  const [potluck, setPotluck] = useState();
  const [errorState, setErrorState] = useState(false);
  const [eventFound, setEventFound] = useState(false);
  const [eventPass, setEventPass] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(typeof potluck.eventPass);
    console.log(typeof eventPass);
    if (potluck.eventPass === Number(eventPass)) {
      console.log(potluck._id);
      setErrorState(false);
      setEventFound(true);
      setTimeout(() => navigate(`/home/ExistingEvents/${potluck._id}`), 3000);
    } else {
      setErrorState(true);
    }
  };
  return (
    <>
      <div id="SuperWrap">
        <div className="container">
          <div className="one">
            <h3 className="title flex-title">
              <span className="title-main">
                <h1>Existing Events</h1>
                <br />
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

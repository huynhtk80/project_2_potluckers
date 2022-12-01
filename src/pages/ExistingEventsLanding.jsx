import React, { useState } from "react";
import TextField from "@mui/material/TextField";
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
                <h2 className="heading-secondary u-margin-bottom-small">
                  Existing Events
                </h2>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find an Event
                </h3>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  Validate
                  autoComplete="off"
                >
                  <SearchPotluckAuto setPotluck={setPotluck} />
                  <TextField
                    id="eventPass"
                    label="EventPass"
                    type="number"
                    variant="outlined"
                    onChange={(e) => setEventPass(e.target.value)}
                  />
                  <a
                    onClick={handleClick}
                    className="btn btn--green"
                    style={{ padding: "10px" }}
                  >
                    Go to Event
                  </a>
                </Box>
                {errorState && (
                  <Alert severity="warning">
                    Potluck and event pass don't match, try again.
                  </Alert>
                )}
                {eventFound && (
                  <Alert severity="success">
                    Event Found, lets join the planning!
                  </Alert>
                )}

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

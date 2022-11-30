import React, { useState } from "react";
import { updateExistingPotluck } from "../api/potluckAPI";
import potluckerLogo from "../img/logo3.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function ParticipantsPopup(props) {
  const [pName, setPName] = useState();
  const [pEmail, setPEmail] = useState();

  const handleClick = () => {
    const oldPotluck = props.potluck;
    console.log("curent potluck", oldPotluck);
    oldPotluck.participants.push({
      name: pName,
      email: pEmail,
      attending: true,
    });
    console.log("should be newParticipants:", oldPotluck);
    props.setPotluck(oldPotluck);
    console.log("the potluck", props.potluck);
    setPEmail("");
    setPName("");
    updateExistingPotluck(props.potluck);
  };

  const handleRemoveClick = () => {
    const oldPotluck = props.potluck;
    const newP = oldPotluck.participants.filter((p) => p.email !== pEmail);
    oldPotluck.participants = newP;
    props.setPotluck(oldPotluck);
    setPEmail("");
    setPName("");
    updateExistingPotluck(props.potluck);
  };

  return props.trigger ? (
    <>
      <div className="popupR" id="popupR">
        <div className="popupR__content">
          <a onClick={() => props.setTrigger(false)} className="popupR__close">
            &times;
          </a>

          <div className="popupR__left">
            <img src={potluckerLogo} alt="Tour photo" className="popupR__img" />
          </div>

          <div className="popupR__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              {props.potluck.title}
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Look Who's Coming &ndash; and who's not!
            </h3>

            <h2>Participants</h2>
            <ul className="popupR__text">
              {props.potluck.participants.map((participant, index) => (
                <>
                  <li>
                    {index + 1}. {`${participant.name} - ${participant.email}`}
                  </li>
                </>
              ))}
            </ul>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="participant"
                label="Name"
                variant="outlined"
                value={pName}
                onChange={(e) => setPName(e.target.value)}
              />
              <TextField
                id="participantEmail"
                label="Email"
                variant="outlined"
                required="true"
                value={pEmail}
                onChange={(e) => setPEmail(e.target.value)}
              />
              <br></br>
              <a
                onClick={handleClick}
                className="btn btn--green"
                style={{ padding: "10px" }}
              >
                Add Me to the list!
              </a>
              <a
                onClick={handleRemoveClick}
                className="btn btn--green"
                style={{ padding: "10px" }}
              >
                Remove me the list!
              </a>
            </Box>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ParticipantsPopup;

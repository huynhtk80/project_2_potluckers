import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createNewPotluck } from "../api/potluckAPI";
import "../pages/dashboard.css"

import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function NewPotluck() {
  const navigate = useNavigate();

  const [eventCreated, setEventCreated] = useState(false);
  const potluckId = useParams().id;
  const [choiceStyle, setChoiceStyle] = useState("Choice");
  const [dateValue, setDateValue] = useState();
  const [eventName, setEventName] = useState();
  const [organizerName, setOrganizerName] = useState();
  const [organizerEmail, setOrganizerEmail] = useState();
  const [expectNumber, setExpectedNumber] = useState();
  const [theme, setTheme] = useState("none");

  console.log(dateValue);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPotluck = {
      title: eventName,
      owner: { name: organizerName, email: organizerEmail },
      eventDate: dateValue,
      numberExpected: expectNumber,
      theme: theme,
      choiceStyle: choiceStyle,
    };
    console.log(newPotluck);
    const created = await createNewPotluck(newPotluck);
    console.log("Created: ", created);
    setEventCreated(true);
    setTimeout(() => navigate(`/home/ExistingEvents/${created._id}`), 3000);
  };

  return (
    <>
      <div className="title-main">
        <h1 >Create Potluck</h1></div>
      <Box className="box-field"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="EventName"
          label="Event Name"
          variant="outlined"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br></br>
        <TextField
          id="OrganizerName"
          label="Organizer Name"
          variant="outlined"
          onChange={(e) => setOrganizerName(e.target.value)}
        />
        <TextField
          id="OrganizerEmail"
          label="Organizer Email"
          variant="outlined"
          onChange={(e) => setOrganizerEmail(e.target.value)}
        />
        <br></br>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Event Date&Time"
            value={dateValue}
            onChange={(e) => setDateValue(dayjs(e).format())}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          id="ExpectedNumber"
          label="Expected Number of Attendees"
          variant="outlined"
          onChange={(e) => setExpectedNumber(e.target.value)}
        />
        <br></br>
        <TextField
          sx={{ m: 1, width: "10ch" }}
          id="Theme"
          label="Theme"
          variant="outlined"
          onChange={(e) => setTheme(e.target.value)}
        />
        <br></br>
        <label>Food People can bring:</label>
        <ToggleButtonGroup className="search-btn"
          color="primary"
          value={choiceStyle}
          exclusive
          onChange={(e) => setChoiceStyle(e.target.value)}
          aria-label="Platform"
        >
          <ToggleButton value="Assigned">Assigned</ToggleButton>
          <ToggleButton value="Choice">Free to Choose</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <a onClick={handleSubmit} className="btn btn--green">
          Submit Event
        </a>
      </Box>
      {eventCreated && (
        <Alert severity="success">
          Event Created Successfully, Lets customize your event further....
        </Alert>
      )}
    </>
  );
}

export default NewPotluck;

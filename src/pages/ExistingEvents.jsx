import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getexistingPotluck } from "../api/potluckAPI";
import FullFeaturedCrudGrid from "../components/datatable";
import EditDataTable from "../components/EditDataTable";
import ParticipantsPopup from "../components/ParticipantsPopup";

function ExistingEvents() {
  const [potluck, setPotluck] = useState();
  const [participantPopup, setParticipantPopup] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchPotluck = async () => {
      const fetchedPotluck = await getexistingPotluck(id);
      setPotluck(fetchedPotluck);
    };
    fetchPotluck();

    return () => {};
  }, []);

  if (!id) {
    return <p>No Id Provided</p>;
  }
  if (!potluck) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div id="SuperWrap">
        <div className="container">
          <div className="one">
            <h3 className="title flex-title">
              <h1>{potluck.title}</h1>

              <p>Organized by: {potluck.owner}</p>
              <p>Event Date: {Date(potluck.eventDate).toString()}</p>
              <p>
                <b>Location: </b>
                {potluck.location.name}
              </p>
              <p>{potluck.location.address}</p>
              <p>
                {potluck.location.city}, {potluck.location.province}
              </p>
              <p>{potluck.location.postalcode}</p>
              <p>Anticipated Attendees: {potluck.numberExpected}</p>
              <p>Confirmed Attendees: {potluck.numberAttending}</p>
              <a
                onClick={() => setParticipantPopup(true)}
                className="btn btn--green"
              >
                See who's coming!
              </a>
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="main"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="appetizer"
              />
              <FullFeaturedCrudGrid
                setPotluck={setPotluck}
                potluck={potluck}
                type="dessert"
              />
            </h3>
          </div>
        </div>
      </div>
      <ParticipantsPopup
        trigger={participantPopup}
        setTrigger={setParticipantPopup}
        potluck={potluck}
      />
    </>
  );
}

export default ExistingEvents;

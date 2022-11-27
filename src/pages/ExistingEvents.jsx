import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getexistingPotluck } from "../api/potluckAPI";
import FullFeaturedCrudGrid from "../components/datatable";
import EditDataTable from "../components/EditDataTable";

function ExistingEvents() {
  const [potluck, setPotluck] = useState();

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
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1 className="romell">Existing Events</h1>
            </span>
            <h2>{potluck.title}</h2>
            <p>Organized by: {potluck.owner}</p>
            <p>Event Date: {Date(potluck.eventDate).toString()}</p>
            <p>Anticipated Attendees: {potluck.numberExpected}</p>
            <p>Confirmed Attendees: {potluck.numberAttending}</p>

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
  );
}

export default ExistingEvents;

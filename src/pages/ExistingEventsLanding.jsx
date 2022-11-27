import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getexistingPotluck } from "../api/potluckAPI";
import FullFeaturedCrudGrid from "../components/datatable";
import EditDataTable from "../components/EditDataTable";
import ParticipantsPopup from "../components/ParticipantsPopup";

function ExistingEventsLanding() {
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

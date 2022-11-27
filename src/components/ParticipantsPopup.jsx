import React from "react";
import potluckerLogo from "../img/logo3.png";

function ParticipantsPopup(props) {
  console.log(props.trigger);
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
            <p className="popupR__text">
              {props.potluck.participants.map((participant, index) => (
                <>
                  <p>
                    {index + 1}. {`${participant.name} - ${participant.email}`}
                  </p>
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ParticipantsPopup;

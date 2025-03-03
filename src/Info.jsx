import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div id="info" className="further-info d-flex row align-content-center ">
      <h1 className="text-center">The Finer Details</h1>
      <h3 className="text-center">Everything You Need to Know</h3>

      <h2 className="text-center">Dress Code</h2>
      <p className="text-center">
        Shades of blue, chic & classy! <br /> Whether it’s baby blue, navy, or
        sky, wear something blue to match the theme.
      </p>
      <h2 className="text-center">Parking</h2>
      <p className="text-center">
        There is parking at the venue. <br />
        It is available on a first come first serve basis
      </p>

      <h2 className="text-center">Picture Perfect</h2>
      <p className="text-center">
        Capture the magic and share your moments using #MeetTheMalalus
      </p>

      <h2 className="text-center">
        This is an invite only Bridal Shower! <br /> no plus ones!
      </h2>
    </div>
  );
}

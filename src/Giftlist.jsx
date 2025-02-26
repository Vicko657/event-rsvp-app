import React from "react";
import "./Giftlist.css";

export default function Giftlist() {
  return (
    <div id="giftlist" className="giftlist d-flex row align-content-center ">
      <h1 className="text-center">Giftlist</h1>
      <h3 className="text-center">
        Your presence is the best gift,
        <br /> but if you would like to shower the <br />
        bride with love...<a></a>
      </h3>
      <div className="all-buttons d-grid gap-2 d-flex justify-content-center">
        <a
          className="giftlist-btn"
          href="https://www.thingstogetme.com/1602857a45f64"
        >
          SARAH'S WISHLIST
        </a>
      </div>
    </div>
  );
}

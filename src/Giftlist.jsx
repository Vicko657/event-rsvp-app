import React from "react";
import "./Giftlist.css";

export default function Giftlist() {
  return (
    <div id="giftlist" className="giftlist d-flex row align-content-center ">
      <h1 className="text-center">Giftlist</h1>
      <p className="text-center">
        We would love if you were able to bring a gift,
        <br class="d-none d-lg-block" /> as we will have a dedicated gift table
        for the bride. <br />
        <br />
        You will find plenty of options below:
      </p>
      <div className="all-buttons d-grid gap-2 d-flex justify-content-center mt-3">
        <a
          className="giftlist-btn"
          href="https://www.thingstogetme.com/1602857a45f64"
          target="_blank"
        >
          SARAH'S WISHLIST
        </a>
      </div>
    </div>
  );
}

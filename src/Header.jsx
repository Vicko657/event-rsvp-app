import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header
      id="invite"
      className="header d-flex row align-content-center vh-100"
    >
      {/* <h3 className="text-center">
        Please wear SOMETHING blue &
        <br />
        join us CELEBRATING
      </h3>

      <img className="logo d-lg-block" src="/imgs/header_img_1.png" alt="img" /> */}

      <p className="date text-center">Saturday 17th MAY 2025</p>

      <p className="time text-center">1pm - 5:30pm</p>
      <p className="address text-center m-0">
        The wilds, Northgate Rd,
        <br /> Barking IG11 0SQ
      </p>
    </header>
  );
}

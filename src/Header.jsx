import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header
      id="invite"
      className="header d-flex row align-content-center vh-100"
    >
      <p className="date text-center">Saturday 17th MAY 2025</p>
      <p className="time text-center">1pm - 5:30pm</p>
      <p className="address text-center m-0">
        The wilds, Northgate Rd,
        <br /> Barking IG11 0SQ
      </p>
    </header>
  );
}

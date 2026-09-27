import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="d-flex row p-4">
        <div className="signature col-12 text-center">
          💻 Designed & Developed by
          <a
            className="d-inline-block ms-1 m-0 p-0"
            href="https://www.victoriaolusegun.com/"
          >
            Victoria
          </a>
        </div>
      </footer>
    </>
  );
}

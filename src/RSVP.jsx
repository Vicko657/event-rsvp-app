import React from "react";
import "./RSVP.css";

export default function RSVP() {
  return (
    <div id="rsvp" className="rsvp-form d-flex row align-content-center">
      <h1 className="text-center text-light">Rsvp</h1>
      <h3 className="text-center text-light ">
        Fill out the form below
        <br /> to confirm your attendance.
      </h3>
      <small className="text-center mt-2">
        PLEASE CONFIRM BY THE 8th April.
      </small>
      <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-6">
          <label for="validationCustom01" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div className="col-md-6">
          <label for="validationCustom02" class="form-label">
            Surname
          </label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
        <div className="col-12">
          <label for="validationCustom03" class="form-label">
            Will you be attending?
          </label>
          <select
            class="form-select form-select-md "
            aria-label=".form-select-md example"
          >
            <option value="1">YES</option>
            <option value="2">NO</option>
          </select>
        </div>
        <div className="col-12">
          <label for="validationCustom04" class="form-label">
            DO YOU HAVE ANY DIETARY REQUIREMENTS?
          </label>
          <input type="text" class="form-control" aria-label="Dietary" />
        </div>
        <div className="col-12">
          <label for="validationCustom05" class="form-label">
            Any special message for the bride?
          </label>

          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            aria-label="message"
          ></textarea>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button type="submit" class="rsvp-btn btn btn-primary m-0 ">
            RSVP
          </button>
        </div>
      </form>
    </div>
  );
}

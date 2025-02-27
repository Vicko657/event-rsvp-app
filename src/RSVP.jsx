import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "./utils/supabase";
import "./RSVP.css";

export default function RSVP() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  const [loading, setLoading] = useState(null);
  const [submitted, setSubmitted] = useState(null);

  async function onSubmit(data) {
    setLoading(true);
    try {
      const { error } = await supabase.from("Bridal_Rsvp").insert([data]);

      if (error) throw error;

      setSubmitted(true);
      reset();
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div id="rsvp" className="rsvp-form d-flex row align-content-center">
      {submitted ? (
        <div className="rsvp-submitted text-center">
          <h2 className="text-light">
            Thank You for <br />
            Submitting your RSVP!
          </h2>
          <p className="mt-3 text-light">
            WE ARE LOOKING FORWARD TO <br />
            CELEBRATING WITH YOU
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 rsvp-btn btn btn-primary "
          >
            SUBMIT ANOTHER RSVP
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-center text-light">Rsvp</h1>
          <h3 className="text-center text-light ">
            Fill out the form below
            <br /> to confirm your attendance.
          </h3>
          <small className="text-center mt-2">
            PLEASE CONFIRM BY THE 8th April.
          </small>
          <form
            className="row g-3"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-md-6">
              <label for="validationCustom01" class="form-label">
                First Name
              </label>
              <input
                type="text"
                {...register("first_name", { required: true })}
                className={`form-control  ${
                  isSubmitted &&
                  (errors.first_name ? "border-warning" : "border-green-500")
                }`}
                aria-label="First name"
              />
              {errors.first_name && (
                <small className="text-warning text-sm">
                  Please enter your first name.
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" class="form-label">
                Surname
              </label>
              <input
                type="text"
                {...register("last_name", { required: true })}
                className={`form-control ${
                  isSubmitted &&
                  (errors.last_name ? "border-warning" : "border-green-500")
                }`}
                aria-label="Last name"
              />
              {errors.last_name && (
                <small className="text-warning text-sm">
                  Please enter your surname.
                </small>
              )}
            </div>
            <div className="col-12">
              <label for="validationCustom03" class="form-label">
                Will you be attending?
              </label>
              <Controller
                name="rsvp"
                control={control}
                defaultValue="YES"
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-select form-select-md ${
                      isSubmitted && errors.rsvp && "border-green-500"
                    } `}
                    aria-label=".form-select-md example"
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                )}
              />
              {errors.firt_name && (
                <small className="text-warning text-sm">
                  Please confirm your attendance.
                </small>
              )}
            </div>
            <div className="col-12">
              <label for="validationCustom04" class="form-label">
                DO YOU HAVE ANY DIETARY REQUIREMENTS?(Please State)
              </label>
              <input
                type="text"
                {...register("dietary_requirements", { required: false })}
                class="form-control"
                aria-label="Dietary"
              />
            </div>
            <div className="col-12">
              <label for="validationCustom05" class="form-label">
                Any special message for the bride?
              </label>

              <textarea
                {...register("message", { required: false })}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                aria-label="message"
              ></textarea>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <button
                type="submit"
                class="rsvp-btn btn btn-primary m-0 "
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT RSVP"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

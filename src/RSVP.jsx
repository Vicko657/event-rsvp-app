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
    setError,
    clearErrors,
    formState: { errors, isSubmitted },
  } = useForm();
  const [loading, setLoading] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [user, setUser] = useState(null);
  const [existingUsers, setExistingUsers] = useState([]);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    fetchRSVPs();
  }, []);

  async function fetchRSVPs() {
    const { data, error } = await supabase
      .from("Bridal_Rsvp")
      .select("first_name, last_name");
    if (error) {
      console.error("Error fetching RSVPs:", error);
    } else {
      setExistingUsers(data);
    }
  }

  async function onSubmit(data) {
    setLoading(true);

    try {
      const firstName = data.first_name.trim().toLowerCase();
      const lastName = data.last_name.trim().toLowerCase();

      const { data: existingUser, error: fetchError } = await supabase
        .from("Bridal_Rsvp")
        .select("id")
        .eq("first_name", firstName)
        .eq("last_name", lastName)
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      if (existingUser) {
        setError("combined_name_error", {
          type: "manual",
          message: "This full name has already rsvp'd.",
        });

        setLoading(false);
        return;
      }

      const { error } = await supabase
        .from("Bridal_Rsvp")
        .insert([{ ...data, first_name: firstName, last_name: lastName }])
        .select("first_name, last_name")
        .single();

      if (error) throw error;

      setSubmitted(true);

      setUser({ first_name: firstName, last_name: lastName });
      reset();
    } catch (error) {
      console.error("Error:", error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  const handleFieldChange = () => {
    setFormChanged(true);
    clearErrors("combined_name_error");
  };
  return (
    <div id="rsvp" className="rsvp-form d-flex row align-content-center">
      {submitted ? (
        <div className="rsvp-submitted text-center">
          <h1 className="text-light m-0 p-0"> Thank You</h1>
          <p className="fullname text-light pt-4 pb-2 text-capitalize">
            {user && (
              <>
                {user.first_name} {user.last_name}
              </>
            )}{" "}
            <br />
          </p>
          <p className="mt-3 text-light mt-0">
            We are looking forward to <br />
            celebrarting with you
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
            <br /> to confirm your attendance
          </h3>
          <p className="small text-center text-light mt-2">
            Please confirm by 8th April.
          </p>
          <form
            className="row g-3"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-md-6">
              <label class="form-label">First Name</label>
              <input
                type="text"
                {...register("first_name", {
                  required: "Please enter your first name.",
                })}
                className={`form-control  ${
                  isSubmitted &&
                  (errors.first_name || errors.combined_name_error
                    ? "border-warning"
                    : "border-Success")
                }`}
                aria-label="First name"
                onChange={handleFieldChange}
              />
              {errors.first_name && (
                <small className="text-warning text-sm">
                  {errors.first_name.message}
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label class="form-label">Surname</label>
              <input
                type="text"
                {...register("last_name", {
                  required: "Please enter your surname.",
                })}
                className={`form-control ${
                  isSubmitted &&
                  (errors.last_name || errors.combined_name_error
                    ? "border-warning"
                    : "border-Success")
                }`}
                aria-label="Last name"
                onChange={handleFieldChange}
              />
              {errors.last_name && (
                <small className="text-warning text-sm">
                  {errors.last_name.message}
                </small>
              )}
            </div>
            {errors.combined_name_error && (
              <div className="col-12 text-center">
                <small className="text-warning">
                  {errors.combined_name_error.message}
                </small>
              </div>
            )}
            <div className="col-12">
              <label class="form-label">Will you be attending?</label>
              <Controller
                name="rsvp"
                control={control}
                defaultValue="YES"
                rules={{ required: "Please confirm your attendance." }}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-select form-select-md ${
                      isSubmitted && errors.rsvp && "border-Success"
                    } `}
                    aria-label=".form-select-md example"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                )}
              />
              {errors.rsvp && (
                <small className="text-warning text-sm">
                  {errors.rsvp.message}
                </small>
              )}
            </div>
            <div className="col-12">
              <label class="form-label">
                Do you have any dietary requirements?
              </label>
              <input
                type="text"
                {...register("dietary_requirements", { required: false })}
                class="form-control"
                aria-label="Dietary"
              />
            </div>
            <div className="col-12">
              <label class="form-label">
                Please leave a special message for the bride
              </label>

              <textarea
                {...register("message")}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                aria-label="message"
              ></textarea>
            </div>

            <div class="col-12 d-flex justify-content-center">
              <button
                type="submit"
                class="rsvp-btn btn btn-primary m-0 "
                disabled={!formChanged || loading}
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

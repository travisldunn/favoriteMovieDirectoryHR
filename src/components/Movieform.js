import React, { useState } from "react";

function Movieform({ onMovieFormSubmit }) {
  const [form, setForm] = useState({ name: "", ratings: "", duration: "" });
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    setActive(true);
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, 0);
    if (!validForm()) {
      setError(true);
      setActive(false);
      setForm({
        ...form,
        duration: "",
      });
    } else {
      setError(false);
      setActive(false);
      // onMovieFormSubmit(form);
      console.log(form, 2);
      setForm({
        name: "",
        ratings: "",
        duration: "",
      });
      console.log(form, 3);
    }
  };

  const validForm = () => {
    let d = form.duration;
    let c = d[d.length - 1];
    let n = Number(d.substr(0, d.length - 1));

    if (isNaN(n)) return false;

    if (c === "m") {
      let hours = n / 60 + "";
      setForm({
        ...form,
        duration: hours,
      });
      console.log(form, 1);
    } else if (c === "h") {
      setForm({
        duration: n + "",
      });
    } else return false;

    return true;
  };

  const renderError = () => {
    if (!active && error)
      return (
        <div className="alert error mb-30" data-testid="alert">
          Please specify time in hours or minutes (e.g. 2.5h or 150m)
        </div>
      );
    return null;
  };
  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              required={true}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              value={form.ratings}
              onChange={handleChange}
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              min="0"
              max="100"
              required={true}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              value={form.duration}
              onChange={handleChange}
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
            />
          </div>
          {/* Use this div when time format is invalid */}
          {renderError()}

          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;

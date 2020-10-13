import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const onMovieFormSubmit = (movie) => {
    // console.log(movie);
    setMovies((movies) => [...movies, movie]);
  };

  const renderNRF = () => {
    if (term.length > 1 && !movieList.length)
      return (
        <div data-testid="noResult">
          <h3 className="text-center">No Results Found</h3>
        </div>
      );
    return null;
  };

  if (term.length > 1) {
    var movieList = movies.filter(
      (m) => m.name.substr(0, term.length).toLowerCase() === term.toLowerCase()
    );
  } else movieList = movies;

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform onMovieFormSubmit={onMovieFormSubmit} />
        </div>
        <div className="layout-column w-30">
          <Search term={term} setTerm={setTerm} />

          {movieList.length ? (
            <Movieslist
              movies={movieList.sort((a, b) =>
                a.duration < b.duration ? 1 : -1
              )}
            />
          ) : null}

          {renderNRF()}
        </div>
      </div>
    </div>
  );
}

export default App;

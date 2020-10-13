import React from "react";

function Search({ setTerm, term }) {
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        value={term}
        onChange={({ target }) => setTerm(target.value)}
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
      />
    </section>
  );
}

export default Search;

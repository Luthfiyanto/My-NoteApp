import React, { useState } from "react";

function NoteSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const searchHandler = (event) => {
    const searchText = event.target.value;
    setQuery(event.target.value);
    onSearch(searchText);
  };

  return (
    <div className="note-search">
      <input type="search" id="search" placeholder="Cari catatan..." value={query} onChange={searchHandler} />
    </div>
  );
}

export default NoteSearch;

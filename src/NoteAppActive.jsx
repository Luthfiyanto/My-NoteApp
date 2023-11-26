import React from "react";
import NoteList from "./NoteList";

function NoteAppActive({ notes, onArchived, onDelete }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  return <NoteList notes={activeNotes} onDelete={onDelete} onArchived={onArchived} />;
}

export default NoteAppActive;

import React from "react";
import NoteList from "./NoteList";

function NoteAppArchive({ notes, onArchived, onDelete }) {
  const activeNotes = notes.filter((note) => note.archived === true);
  return <NoteList notes={activeNotes} onDelete={onDelete} onArchived={onArchived} />;
}

export default NoteAppArchive;

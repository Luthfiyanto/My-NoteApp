import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from "./NoteEmpty";

function NoteList({ notes, onDelete, onArchived }) {
  if (notes.length == 0) {
    return <NoteEmpty />;
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note} />
        ))}
      </div>
    );
  }
}

export default NoteList;

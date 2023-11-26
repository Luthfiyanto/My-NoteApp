import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./components/DeleteButton";
import ArchivedButton from "./components/ArchivedButton";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton id={id} archived={archived} onArchived={onArchived} />
      </div>
    </div>
  );
}

export default NoteItem;

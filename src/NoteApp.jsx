import React from "react";
import { getInitialData } from "./utils";
import NoteAppActive from "./NoteAppActive";
import NoteAppArchive from "./NoteAppArchive";
import NoteSearch from "./NoteSearch";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.initialNotes = getInitialData();
    this.state = {
      notes: this.initialNotes,
      stored: this.initialNotes,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.filter((note) => note.id !== id);
      return { notes: notes, stored: notes };
    });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      });
      return { notes: notes, stored: notes };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      const notes = [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: Date().toString(),
        },
      ];
      return { notes: notes, stored: notes };
    });
  }

  onSearchHandler(query) {
    this.setState(() => {
      const filteredNote = this.state.stored.filter((note) => note.title.toLowerCase().includes(query));
      return { notes: filteredNote };
    });
  }

  render() {
    return (
      <>
        <section className="note-app__header">
          <h1>Note App</h1>
          <NoteSearch onSearch={this.onSearchHandler} />
        </section>
        <section className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteAppActive notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
          <h2>Arsip</h2>
          <NoteAppArchive notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
        </section>
      </>
    );
  }
}
export default NoteApp;

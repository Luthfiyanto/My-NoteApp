import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 150,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= this.state.maxChar) {
      this.setState(() => {
        return {
          body: inputValue,
        };
      });
    }
  }
  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const remainChar = this.state.maxChar - this.state.body.length;
    return (
      <form action="" className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit ">Sisa karakter: {remainChar}</p>
        <input className="note-input__title" type="text" id="title" placeholder="Tulis judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className="note-input__body" id="body" placeholder="Tulis catatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;

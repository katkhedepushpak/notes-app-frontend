import React, { useContext, useState } from 'react';
import notesContext from '../context/notes/notesContext';
import '../css/form.css';

const AddNote = () => {
  const context = useContext(notesContext);
  const { addNote } = context;
  const initialNoteState = { title: "", description: "", tag: "", urgency: false };
  const [note, setNote] = useState(initialNoteState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding note', note);

    addNote(note);
    setNote(initialNoteState); // Reset the note state to clear the input fields
    document.querySelector('[data-bs-dismiss="modal"]').click(); // Close the modal
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNote({ ...note, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter title here"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Description of the note"
            id="description"
            name="description"
            style={{ height: '150px' }}
            value={note.description}
            onChange={onChange}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tag"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
          <label htmlFor="tag">Tag</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="urgency"
            name="urgency"
            checked={note.urgency}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="urgency">
            Mark as Urgent
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
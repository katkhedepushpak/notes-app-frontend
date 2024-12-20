import React, { useState, useContext } from 'react';
import '../css/form.css';
import notesContext from '../context/notes/notesContext';
import Notecard from './Notecard';
import AddNote from './AddNote';
import Footer from './Footer';
const Home = () => {
  const noteContext = useContext(notesContext);
  const { notes, setNotes } = noteContext;
  console.log(notes);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3>Your Notes</h3>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#addNoteModal"
        >
          New Note +
        </button>
      </div>

      <div className="container mx-auto" style={{ width: '95%' }}>
        <div className="row my-3 mx-auto">
          {notes.map((note) => {
            return (
              <div className="col-md-3 mx-3 my-3" key={note.id}>
                <Notecard note={note} />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="modal fade"
        id="addNoteModal"
        tabIndex="-1"
        aria-labelledby="addNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addNoteModalLabel">Enter details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddNote />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
import React, { useContext } from 'react';
import notesContext from '../context/notes/notesContext';


const Notecard = ({ note }) => {
  const formattedDate = new Date(note.date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const context = useContext(notesContext);
  const { deleteNote } = context;
  const onDelete = () => {
    deleteNote(note._id);
    console.log(note._id);
    
    document.querySelector('[data-bs-dismiss="modal"]').click();


  };

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          {note.urgency && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              Urgent
            </span>
          )}
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target={`#noteModal${note.id}`}
            >
              View
            </button>
            <small className="text-muted">{formattedDate}</small>
          </div>

          <div
            className="modal fade"
            id={`noteModal${note.id}`}
            tabIndex="-1"
            aria-labelledby={`noteModalLabel${note.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p>{note.urgency && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Urgent
                  </span>
                )} </p>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={`noteModalLabel${note.id}`}>
                    {note.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body" style={{ color: 'grey', fontSize: '0.875rem' }}>
                  {note.tag}
                </div>
                <div className="modal-body">{note.description}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs="modal"
                  >
                    Edit <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs="modal"
                    onClick={onDelete}
                  >
                    Delete <i className="fa-solid fa-trash-can"></i>
                  </button>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notecard;

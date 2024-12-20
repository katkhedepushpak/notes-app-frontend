import React from 'react';
import '../css/form.css';

const AddNote = () => {
  return (
    <div>
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Enter title here" id="titletext" />
          <label htmlFor="titletext">Title</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Description of the note" id="notedescription" style={{ height: '150px' }}></textarea>
          <label htmlFor="notedescription">Description</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Tag" id="tagnote" />
          <label htmlFor="tagnote">Tag</label>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mark as Urgent
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
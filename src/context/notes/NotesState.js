import React,{ useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {

    const availableNotes = [
        {
          "tag": "General",
          "urgency": false,
          "_id": "6763bcacf85d45a9a3000a1e",
          "user": "6762c88ff427c0c646ff1812",
          "title": "Note 1",
          "description": "this is a first example note for the testing",
          "date": "2024-12-19T06:26:52.167Z",
          "__v": 0
        },
        {
          "tag": "General",
          "_id": "6763be08b83eb6905068e1a2",
          "user": "6762c88ff427c0c646ff1812",
          "title": "Update Note 2 title",
          "description": "this is second example note for the testing updation",
          "date": "2024-12-19T06:32:40.039Z",
          "__v": 0,
          "urgency": true
        },
        {
          "_id": "6764eca4672905003f9f8b2a",
          "user": "6762c88ff427c0c646ff1812",
          "title": "Note 5",
          "description": "this is second example note with urgnency for the testing",
          "tag": "youtube",
          "urgency": true,
          "date": "2024-12-20T04:03:48.708Z",
          "__v": 0
        },
        {
          "_id": "6764eca7672905003f9f8b2c",
          "user": "6762c88ff427c0c646ff1812",
          "title": "Note 5",
          "description": "this is second example note with urgnency for the testing",
          "tag": "youtube",
          "urgency": true,
          "date": "2024-12-20T04:03:51.922Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(availableNotes);


      // Add a note
      const addNote = (note) => {

        setNotes(notes.concat(note));
        
      }

      const deleteNote = (noteid) => {
        
        const newNotes= notes.filter((note)=>{return note._id!==noteid})
        setNotes(newNotes);
      }
      

      // Edit a note
      const editNote = (title, description, tag, urgency, id) => {

      }


return (
    <notesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
        {props.children}
    </notesContext.Provider>
);
};

export default NotesState;
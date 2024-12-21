import React, {useContext} from 'react'
import notesContext from '../context/notes/notesContext';


const ViewModal = () => {

const context = useContext(notesContext);
const { deleteNote } = context;
const onDelete = () => {
    deleteNote(note._id);
    console.log(note._id);

};
  return (
    <div>
      
    </div>
  )
}

export default ViewModal

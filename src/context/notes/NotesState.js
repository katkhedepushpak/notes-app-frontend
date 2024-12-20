import React,{ useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {
    const s1 = {
        "name": "Rahul",
        "class": "10th"
    };
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rahul Kumar",
                "class": "11th"
            });
        }, 3000);
    }
return (
    <notesContext.Provider value={{ state, update }}>
        {props.children}
    </notesContext.Provider>
);
};

export default NotesState;
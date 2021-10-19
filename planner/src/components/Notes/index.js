import React, {useState, useEffect} from "react";
import "./style.css";

function Notes() {
    const [notes, setNotes] = useState(["", "", "", "", ""]);

    useEffect(() => {
        loadLocalStorage();
    }, []);

    function loadLocalStorage() {
        for (let i = 0; i < notes.length; i++) {
            document.getElementById(`react_day_planner_note_row${i}`).innerHTML = localStorage.getItem(`react_day_planner_note_row${i}`)
        }
    }

    function onNotesInputChange(e) {
        localStorage.setItem(e.target.id, e.target.innerHTML)
    }

    function clearNotesStorage(e) {
        for (let i = 0; i < notes.length; i++) {
            localStorage.removeItem(`react_day_planner_note_row${i}`);
        }
        loadLocalStorage();
    }

    return (
        <div id="notes" className = "shadow">
            <h1 className = "title-style">Notes</h1>
            <table className="table">
                <tbody>
                    {notes.map((note, index) => 
                        <tr className = "notes-row" key={index}>
                            <th contentEditable="true" id={`react_day_planner_note_row${index}`} onInput={onNotesInputChange}></th>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button onClick={clearNotesStorage} className="btn btn-danger">Clear Notes</button>
            </div>
        </div>
    );
}

export default Notes;
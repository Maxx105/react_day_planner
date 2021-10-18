import React, {useState, useEffect} from "react";
import "./style.css";

function TopPriorities() {
    const [priorities, setPriorities] = useState([]);
    const [priority, setPriority] = useState('');

    useEffect(() => {
        setInitialLocalStorageArray();
    }, []);

    function setInitialLocalStorageArray() {
        if (JSON.parse(localStorage.getItem('react_day_planner_priorities')) === null) {
            setPriorities([]);
        } else {
            setPriorities(JSON.parse(localStorage.getItem('react_day_planner_priorities')));
        };
    }

    function handlePriorityInputChange(e) {
        setPriority(e.target.value);
    }

    function addToDoItem(e) {
        if (priority){
            let prioritiesArray = priorities;
            if (prioritiesArray.length !== 0) {
                prioritiesArray.push({priority, id:prioritiesArray[prioritiesArray.length - 1].id + 1});
            } else prioritiesArray.push({priority, id:1});
            localStorage.setItem('react_day_planner_priorities', JSON.stringify(prioritiesArray));
            setPriorities(JSON.parse(localStorage.getItem('react_day_planner_priorities')));
            setPriority("");
            document.getElementById("priority-input").value = "";
        } else return
    }

    function deletePriority(e) {
        let prioritiesStorage = JSON.parse(localStorage.getItem('react_day_planner_priorities'));  
        let index = prioritiesStorage.findIndex((obj => obj.id === e.target.attributes[1].nodeValue));
        prioritiesStorage.splice(index, 1);
        localStorage.setItem('react_day_planner_priorities', JSON.stringify(prioritiesStorage));
        setPriorities(JSON.parse(localStorage.getItem('react_day_planner_priorities')));
    }

    return (
        <div id="top-priorities"  className = "shadow">
            <h1>Top Priorities</h1>
            <div className="d-grid gap-2">
                <button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#priority">Add a Priority</button>
            </div>
            <div className="modal fade" id="priority" tabIndex="-1" aria-labelledby="priorityLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a Priority</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Priority" id="priority-input" onChange={handlePriorityInputChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addToDoItem}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="top-priorities-list">
                <tbody>
                    {priorities.map((priority, index) => (
                        <tr key={index}>
                            <th className="priorityValue">
                                <li id="priority-item"><strong>{priority.priority}</strong></li>
                            </th>
                            <th className="priorityDelete" ><i className="fas fa-trash-alt" value={priority.id} id={priority.priority} onClick={deletePriority}></i></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TopPriorities;
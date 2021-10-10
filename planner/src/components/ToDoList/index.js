import React, {useState, useEffect} from "react";
import "./style.css";

function ToDoList() {
    const [toDoItems, setToDoItems] = useState([]);
    const [toDoItem, setToDoItem] = useState('');
    const [checked, setChecked] = useState("");

    useEffect(() => {
        setInitialLocalStorageArray();
    }, []);

    function setInitialLocalStorageArray() {
        if (JSON.parse(localStorage.getItem('react_day_planner_todos')) === null) {
            setToDoItems([]);
        } else {
            setToDoItems(JSON.parse(localStorage.getItem('react_day_planner_todos')));
        };
    }

    function addToDoItem(e) {
        let toDoItemsArray = toDoItems;
        toDoItemsArray.push({toDoItem, checked:"true"});
        localStorage.setItem('react_day_planner_todos', JSON.stringify(toDoItemsArray));
        setToDoItems(JSON.parse(localStorage.getItem('react_day_planner_todos')));
        document.getElementById("toDoItem").value = "";
    }

    function handleToDoItemInputChange(e) {
        setToDoItem(e.target.value)
    }

    function handleToDoItemCheckboxChange(e) {
        console.log(e.target.checked);
    }
    
    function deleteToDoItem(e) {
        let toDoArray = [];
        let localToDoItemsStorageArray = JSON.parse(localStorage.getItem('react_day_planner_todos'));
        for (let i = 0; i < localToDoItemsStorageArray.length; i++) {
            toDoArray.push(localToDoItemsStorageArray[i].toDoItem)
        }
        let index = toDoArray.indexOf(e.target.attributes[1].nodeValue);
        if (index !== -1) {
            localToDoItemsStorageArray.splice(index, 1);
            localStorage.setItem('react_day_planner_todos', JSON.stringify(localToDoItemsStorageArray));
        }
        setToDoItems(JSON.parse(localStorage.getItem('react_day_planner_todos')));
    }

    return (
        <div id="to-do-list" className = "shadow">
            <h1>To Do List</h1>
            <div className="d-grid gap-2">
                <button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#add-to-do-item">Add To Do Item</button>
            </div>
            <div className="modal fade" id="add-to-do-item" tabIndex="-1" aria-labelledby="add-to-do-itemLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add To Do Item</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="To Do Item" id="toDoItem" onChange={handleToDoItemInputChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addToDoItem}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="toDoItemsTable">
                <tbody>
                    {toDoItems.map((item, index) => (
                        <tr key={index}>
                            <th className="toDoValue">
                                <div className="form-check" key={index}>
                                    <input className="form-check-input" type="checkbox" value="" id={item.toDoItem} onChange={handleToDoItemCheckboxChange}/>
                                    <label className="form-check-label">
                                        <strong>{item.toDoItem}</strong>
                                    </label>
                                </div>
                            </th>
                            <th className="toDoDelete" ><i className="fas fa-trash-alt" value={item.toDoItem} onClick={deleteToDoItem}></i></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ToDoList;
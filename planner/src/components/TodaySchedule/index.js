import React, {useState, useEffect} from "react";
import "./style.css";

function TodaySchedule() {
    const times = ["6am-7am", "7am-8am", "8am-9am", "9am-10am", "10am-11am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm"];
    const [currentTime, setCurrentTime] = useState("");
    const [taskColors, setTaskColors] = useState([]);

    useEffect(() => {
        setSchedule();
        getHourColor();
    }, []);

    function setTask(time) {
        if (document.getElementById(time).innerHTML !== "") {
            localStorage.setItem(time, document.getElementById(time).innerHTML);
        } 
    }

    function setSchedule() {
        for (let i = 0; i < times.length; i++) {
            document.getElementById(times[i]).innerHTML = localStorage.getItem(times[i])
        }
    }

    function deleteTask(time) {
        localStorage.removeItem(time, document.getElementById(time).innerHTML);
        setSchedule();
    }

    function getHourColor() {
        const date = new Date();
        const hour = date.getHours();
        let colorsArray = [];
        for (let i = parseInt(times[0][0]); i < times.length + parseInt(times[0][0]); i++) {
            if (hour >= i && hour < i+1) {
                colorsArray.push("rgb(247, 212, 218, 0.76)")   
            } else if (hour < i) {
                colorsArray.push("rgba(216, 240, 216, 0.76)")
            } else if (hour >= i+1) {
                colorsArray.push("")
            }
        }
        setTaskColors(colorsArray);
    }

    return (
        <div>
            <div id="today-schedule" className = "shadow">
                <h1 className = "title-style">Today's Schedule</h1>
                <table className="table">
                    <tbody>
                        {times.map((time, index) => (
                            <tr key={time} style={{backgroundColor: taskColors[index]}}>
                                <th className="time">{time}</th>
                                <th className="task" id={time} contentEditable="true" onInput={() => setTask(time)}></th>
                                <th className="delete" ><i className="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteTask" onClick={() => setCurrentTime(time)}></i></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="deleteTask" tabIndex="-1" aria-labelledby="deleteTaskLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteTaskLabel">Delete Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this task?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" onClick={() => deleteTask(currentTime)} className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaySchedule;
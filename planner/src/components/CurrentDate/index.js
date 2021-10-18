import React, {useState, useEffect} from "react";
import "./style.css";

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState(setInterval(setTime,1000));

    useEffect(() => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        setCurrentDate(`${month+1}/${day}/${year}`);
        setInterval(setTime(), 1000);
    }, []);

    function setTime() {
        const d = new Date();
        setCurrentTime(d.toLocaleTimeString())
        if (d.toLocaleTimeString() === "12:00:00 AM") {
            localStorage.clear();
            window.location.reload(true);
        }
    }

    return (
        <div id="current-datetime" className = "shadow">
            <h1 className = "title-style">{currentDate}</h1>
            <hr/>
            <h1 className = "title-style">{currentTime}</h1>
        </div>
    );
}

export default CurrentDate;
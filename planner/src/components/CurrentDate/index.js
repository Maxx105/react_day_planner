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
    }

    function clearStorage() {
        
    }

    return (
        <div id="current-datetime" className = "shadow">
            <h1>{currentDate}</h1>
            <h1>{currentTime}</h1>
        </div>
    );
}

export default CurrentDate;
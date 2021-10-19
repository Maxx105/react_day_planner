import React from "react";
import "./style.css";

function ForTomorrow() {
    return (
        <div id="for-tomorrow" className = "shadow">
            <h1 className = "title-style">For Tomorrow</h1>
            <div className="d-grid gap-2">
                <button className="btn btn-dark">Set Tomorrow's Schedule</button>
            </div>
        </div>
    );
}

export default ForTomorrow;
import React from "react";
import "./style.css";

function TodaySchedule() {
    return (
        <div>
            <h1>TODAY SCHEDULE</h1>
            <table className="table">
                <tr>
                    <th className="time">6am-7am</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">7am-8am</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">8am-9am</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">9am-10am</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">10am-11am</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">11am-12pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">12pm-1pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">2pm-3pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">3pm-4pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">4pm-5pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">5pm-6pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">6pm-7pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">7pm-8pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">8pm-9pm</th>
                    <th className="task"><p></p></th>
                </tr>
                <tr>
                    <th className="time">9pm-10pm</th>
                    <th className="task"><p></p></th>
                </tr>
            </table>
        </div>
    );
}

export default TodaySchedule;
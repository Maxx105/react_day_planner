import React, {useState, useEffect} from "react";
import "./style.css";

function WaterIntake() {
    const [waterIntakeBooleans, setWaterIntakeBooleans] = useState([]);
    
    useEffect(() => {
        setInitialLocalStorageArray();
    }, []);

    function setInitialLocalStorageArray() {
        if (JSON.parse(localStorage.getItem('react_day_water_intake_states')) === null) {
            setWaterIntakeBooleans(["", "", "", "", "", "", "", ""]);
        } else {
            setWaterIntakeBooleans(JSON.parse(localStorage.getItem('react_day_water_intake_states')));
        };
    }

    function onWaterClick(e) {
        let waterIntakeStatesArray = [];
        waterIntakeStatesArray = waterIntakeBooleans;
        if (waterIntakeStatesArray[e.target.id] === "") {
            waterIntakeStatesArray[e.target.id] = "black"
            e.target.style.backgroundColor = "black"
        } else if (waterIntakeStatesArray[e.target.id] === "black") {
            waterIntakeStatesArray[e.target.id] = ""
            e.target.style.backgroundColor = ""
        }
        localStorage.setItem('react_day_water_intake_states', JSON.stringify(waterIntakeStatesArray));
        setWaterIntakeBooleans(waterIntakeStatesArray)
    }

    return (
        <div id="water-intake" className = "shadow">
            <h1 >Water Intake</h1>
            <table>
                <tbody>
                    <tr >
                        {waterIntakeBooleans.map((state, index) => (
                            <th  className="water-value" key={index}>
                                <div onClick = {onWaterClick} id={index} className="tear" style={{backgroundColor: state}}></div>
                            </th>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WaterIntake;
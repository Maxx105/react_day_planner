import './App.css';
import TodaySchedule from "./components/TodaySchedule";
import Title from "./components/Title";
import CurrentDate from "./components/CurrentDate";
import ForTomorrow from "./components/ForTomorrow";
import ToDoList from "./components/ToDoList";
import TopPriorities from "./components/TopPriorities";
import WaterIntake from "./components/WaterIntake";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App container">
      <div className = "row">
        <div className="col-md-7 col-sm-12">
          <Title/>
          <CurrentDate/>
          <TodaySchedule/>
        </div>
        <div className="col-md-5 col-sm-12">
          <TopPriorities/>
          <ToDoList/>
          <WaterIntake/>
          <Notes/>
          <ForTomorrow/>
        </div>
      </div>
    </div>
  );
}

export default App;

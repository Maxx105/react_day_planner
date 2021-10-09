import './App.css';
import TodaySchedule from "./components/TodaySchedule";
import Title from "./components/Title";
import Date from "./components/Date";
import ForTomorrow from "./components/ForTomorrow";
import ToDoList from "./components/ToDoList";
import TopPriorities from "./components/TopPriorities";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App container">
      <div className = "row">
        <div className="col-md-7 col-sm-12">
          <Title/>
          <TodaySchedule/>
          <ForTomorrow/>
        </div>
        <div className="col-md-5 col-sm-12">
          <Date/>
          <TopPriorities/>
          <ToDoList/>
          <Notes/>
        </div>
      </div>
    </div>
  );
}

export default App;

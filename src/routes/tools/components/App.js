import React from "react";
import List from "./List";

function App() {
  const [tasks, updateTasks] = React.useState([]);
  const [tepmtasks, updatetempTasks] = React.useState("");

  function todelete(id) {
    const updatedtasklist = tasks.filter((task, index) => index !== id);
    updateTasks(updatedtasklist);
  }

  function handleinput(event) {
    const value = event.target.value;
    updatetempTasks(value);
  }

  function handleclick() {
    updateTasks((preValue) => {
      return [...preValue, tepmtasks];
    });
    updatetempTasks("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleinput} type="text" value={tepmtasks} />
        <button>
          <span onClick={handleclick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((tasks, index) => (
            <List key={index} id={index} task={tasks} onChecked={todelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

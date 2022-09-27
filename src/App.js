import { useState } from 'react';
import './App.css';
import Overview from './comps/Overview';
import uniqid from "uniqid";

function App() {


  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ text: '' })

  const handleChange = (e) => setTask({ text: e.target.value, id: uniqid() });

  const addTaskArray = () => {
    console.log(tasks);
    setTasks([...tasks, task])
  }


  function handleSubmit(event) {
    event.preventDefault()
    addTaskArray()
    setTask({ text: "" })
  }

  return (
    <div className="App">
      <h1>{task.text}</h1>
      <h1> {tasks.length} </h1>
      <form onSubmit={handleSubmit}>
        <input name="title" id='taskInput' onChange={handleChange} value={task.text} />
        <input type="submit" value="Submit" />
      </form>

      <Overview tasks={tasks}></Overview>
    </div>
  );
}

export default App;

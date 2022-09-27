import { useState } from 'react';
import './App.css';
import Overview from './comps/Overview';

function App() {


  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ text: '' })

  const handleChange = (e) => setTask({ text: e.target.value, id: tasks.length + 1 });

  const addTaskArray = () => {
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
      {tasks.map((item, index) => <Overview text={item.text} _id={item.id} key={index} >  </Overview>)}
    </div>
  );
}

export default App;

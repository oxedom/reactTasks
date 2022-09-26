import { useState } from 'react';
import './App.css';
import Overview from './comps/Overview';

function App() {


  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ text: '' })

  const addTaskArray = () => {
    setTasks([...tasks, task])
  }

  function handleKeyUp(event) {
    let text = event.target.value
    setTask({ text: `${text}` })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addTaskArray()
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" id='taskInput' onKeyUp={handleKeyUp} />
        <input type="submit" value="Submit" />
      </form>
      <Overview> {tasks.map(el => <div> {el.text} </div>)} </Overview>
    </div>
  );
}

export default App;

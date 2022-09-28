import './App.css';
import Overview from './comps/Overview';
import uniqid from "uniqid";
import React, { Component } from "react";


class App extends Component {
  constructor() {
    super()
    this.state = {
      task: { text: "" },
      tasks: [],

    }
  }

  handleChange = (e) => {
    this.setState({
      task: { text: e.target.value, id: uniqid() }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" }
    },)
  }

  addTaskArray = () => {

  }

  updateTasks = (newTasks) => {
    this.setState({ tasks: newTasks })
  }


  render() {
    const { task, tasks } = this.state

    return <div>
      <h1>{task.text}</h1>
      <h1> {tasks.length}</h1>
      <form onSubmit={this.handleSubmit}>
        <input name="title" id='taskInput' onChange={this.handleChange} value={task.text} />
        <input type="submit" value="Submit" />
      </form>
      <Overview updateTasks={this.updateTasks} tasks={tasks} ></Overview>

    </div>
  }




}




export default App;

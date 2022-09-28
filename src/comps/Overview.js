import React, { Component } from "react";



class Overview extends Component {
    constructor(props) {
        super(props)


    }
    handleClick = (e) => {

        const tasksFilter = this.props.tasks.filter((t) => { return t.id !== e.target.getAttribute('a-key') })
        this.props.updateTasks(tasksFilter)
        return
    }

    render() {


        return <div>   {this.props.tasks.map((task) => {
            return (<div key={task.id}>
                <p>{task.text}  </p>
                <button onClick={this.handleClick} a-key={task.id}> DELETE</button>
            </div>)
        })}</div>

    }


}
// const Overview = (props) => {
//     const { tasks } = props
//     function handleClick(e) {
//         const tasksFilter = tasks.filter((t) => { return t.id !== e.target.getAttribute('a-key') })
//         props.onTasksChange(tasksFilter)
//     }


//     return <div>   {tasks.map((task) => {
//         return (<div key={task.id}>
//             <p>{task.text}  </p>
//             <button onClick={handleClick} a-key={task.id}> DELETE</button>
//         </div>)
//     })}</div>




// }




export default Overview;
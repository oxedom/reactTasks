const Overview = (props) => {
    const { tasks } = props
    function handleClick(e) {
        const tasksFilter = tasks.filter((t) => { return t.id !== e.target.getAttribute('a-key') })
        props.onTasksChange(tasksFilter)
    }

    return <div>   {tasks.map((task) => {
        return (<div key={task.id}>
            <p>{task.text}  </p>
            <button onClick={handleClick} a-key={task.id}> DELETE</button>
        </div>)
    })}</div>




}




export default Overview;
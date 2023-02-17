import TaskRow from "./TaskRow"

function TaskList({ tasksList, toggleTask, showCompleted = false, title }) {

    function taskTableRows(doneValue) {

        const filteredList = tasksList.filter(task => task.done == doneValue)

        if (filteredList.length > 0) {
            return (
                filteredList.map(item => (<TaskRow item={item} toggleTask={toggleTask} key={item.name} />)))
        } else {
            return <tr><td className="fst-italic">Acá no hay nada...</td></tr>
        }
    }

    const undoneThBg = "bg-warning text-dark"
    
    const doneThBg = "bg-success text-dark"

    return (
        <div>
            <table className="table table-dark table-hover table-bordered border-secondary">
                <thead>
                    <tr>
                        <th className={title == "Tareas" ? undoneThBg : doneThBg}>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    {taskTableRows(showCompleted)}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
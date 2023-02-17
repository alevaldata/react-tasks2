import { useState } from "react"

function TaskCreator({ addNewTask }) {

    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTask(newTask)
        setNewTask("")
    }

    return (
        <form className="pt-4 pb-2" onSubmit={handleSubmit}>
            <input
                className="rounded-2 me-2"
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nueva tarea..."
                value={newTask}
                required
                autoFocus
            />
            <button className="btn btn-sm btn-success">Guardar</button>
        </form>
    )
}

export default TaskCreator
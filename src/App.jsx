import './App.css'
import TaskCreator from './components/TaskCreator'
import { useState, useEffect } from "react"
import TaskList from './components/TaskList'
import ShowDone from './components/ShowDone'

function App() {

  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksList(JSON.parse(data))
    }
  }, [])

  function addNewTask(newTask) {
    if (tasksList.find(task => task.name == newTask)) {
      alert('Tarea ya creada')
    } else {
      setTasksList([...tasksList, {
        name: newTask, done: false
      }])
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList))
  }, [tasksList])

  function toggleTask(item) {
    setTasksList(tasksList.map(t => (t.name == item.name ? { ...t, done: !t.done } : t)))
  }

  const [showCompleted, setShowCompleted] = useState(false)

  function delCompleted() {
    if (window.confirm("Borrar tareas hechas?")) {
      setTasksList(tasksList.filter(t => !t.done))
      setShowCompleted(false)
    }
  }

  return (
    <main className='bg-dark vh-100 text-white'>
      <div className="container">
        <TaskCreator addNewTask={addNewTask} />

        <ShowDone showCompleted={showCompleted} setShowCompleted={setShowCompleted} delCompleted={delCompleted} tasksList={tasksList} />

        <TaskList title="Tareas" tasksList={tasksList} toggleTask={toggleTask} />

        {showCompleted && (<TaskList title="Tareas hechas" tasksList={tasksList} toggleTask={toggleTask} showCompleted={true} />)}
      </div>
    </main>
  )
}

export default App

function ShowDone({ showCompleted, setShowCompleted, delCompleted, tasksList }) {

    const tasksDoneCount = tasksList.filter(t => t.done).length

    const disabled = tasksDoneCount < 1

    if (disabled) {
        setShowCompleted(false)
    }

    return (
        <div className="form-switch mx-2 my-3">
            <label>
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    role="switch" disabled={disabled}
                    checked={showCompleted}
                    onChange={(e) => setShowCompleted(e.target.checked)} />
                Ver tareas hechas <span className="fw-bold">({tasksDoneCount})</span>
            </label>
            {showCompleted && tasksDoneCount > 0 ? <button className="btn btn-danger btn-sm ms-2" onClick={delCompleted}>Limpiar tareas hechas</button> : null}
        </div>
    )
}

export default ShowDone
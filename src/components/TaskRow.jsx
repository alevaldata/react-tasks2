function TaskRow({ item, toggleTask }) {

    const doneText = "text-success"
    const undoneText = "text-warning"

    return (
        <tr>
            <td className="">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id={item.name}
                    checked={item.done}
                    onChange={() => toggleTask(item)}
                />
                <label className={item.done ? doneText : undoneText} htmlFor={item.name}>{item.name}</label>
            </td>
        </tr>
    )
}

export default TaskRow
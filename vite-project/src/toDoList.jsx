import { useState } from "react"
import "./list.css"

function ToDoList() {
    const [tasks, setTasks] = useState(["walk","scat"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {}

    function deleteTask(index) {}

    function moveTaskUp(index) {}

    function moveTaskDown(index) {}

    return (
        <div className="To-Do-List">
            <div>
                <h1>To do List</h1>
                <input type="text" placeholder="blarg" value={newTask} onChange={handleInputChange} />

                <button className="add-button" onClick={addTask}></button>
            </div>

            <ol>
               {tasks.map((task, index) => <li key={index}> <span>task: {task}
               <button className="delete-button" onClick={ () => deleteTask(index)}> del </button>
               <button className="moveTaskUp-button" onClick={() => moveTaskUp(index)}> up </button>
               <button className="moveTaskDown-button" onClick={() => moveTaskDown(index)}>down </button>
                 </span> </li>)}


            </ol>
        </div>
    );
}

export default ToDoList;
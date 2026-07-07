import { useState } from "react"

function TodoApp(){
    let [task , setTask] = useState("")
    let [todos , setTodos] = useState([])


    let handleChange = (e) => {
        setTask(e.target.value)
    }
    let addtask = () => {
        setTodos([...todos, task])
        setTask("")
    }
    let deleteTask = (index) => {
        let newTodos = todos.filter((value, i) => i !== index)
        setTodos(newTodos)
    }


    return (
        <div>
            <h2>Todo App for You!!</h2>
            <input value={task}
            onChange = {handleChange} 
            >
            
            </input>
            <div></div>
            <button onClick={addtask}>Add task!   </button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}
                        style={{listStyle : "none"}}
                        
                        >
                            {todo}
                            <button onClick={() => deleteTask(index)}>X-X</button>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default TodoApp
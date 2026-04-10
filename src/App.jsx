import "./index.scss"
import { useState } from "react";
export default function App() {

    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()
            setTodos([...todos,
                { id: crypto.randomUUID(), title: newItem, completed: false}
            ])
            setNewItem("")
        }

        function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })
        }

        function deleteTodos(id){
        setTodos(currentTodos=> {
            return currentTodos.filter(todo => todo.id !== id)
            })
        }
console.log(todos);


    return (
        <>
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label>
                    New Item
                </label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                <button className="btn-form">Add</button>
            </div>

        </form>
        <h1 className="header">
            Todo List
        </h1>
            <ul className="list">
                {todos.map(todo =>{
                    return (
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id,e.target.checked)} id="checkbox" />
                        {todo.title}
                    </label>
                    <button onClick={() => deleteTodos(todo.id)} className="d-btn">Delete</button>
                </li>

                )})}
            </ul>
            </>
    )}



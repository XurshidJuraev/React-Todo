import React from 'react'
import './Todo.scss'

function Todo ({ children, handleDelete, handleComplete, todo }) {

    return (
        <li className={`list todo ${todo.isCompleted && 'todo--inactive'}`}>
            <input className='todo-chek' type="radio" data-todo-id={todo.id} onChange={handleComplete} defaultChecked={todo.isCompleted} />
            {children}


            <button className='todo-delate' data-todo-id={todo.id} onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Todo
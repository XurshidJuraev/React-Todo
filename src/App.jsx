import React, { useState } from 'react';
import './App.scss';

import Todo from './Components/Todo/Todo'

function App () {
    
    
    const [renderType, setRenderType] = useState('all') // completed | unCompleted
    
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || []);
    
    const [completed, setCompleted] = useState([])
    const [unCompleted, setUnCompleted] = useState([])
    
    
    
    
    const addTodo = evt => {
        
        if (evt.code === 'Enter') {
            const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                text: evt.target.value.trim(),
                isCompleted: false,
            }
            
            setTodos([...todos, newTodo])
            window.localStorage.setItem('todos', JSON.stringify([   ...todos, newTodo]))
        }
    }
    
    
    const handleDelete = (evt) => {
        
        const { todoId } = evt.target.dataset
        
        const foundTodoId = Number(todoId)
        
        
        const filteredTodos = todos.filter(todo => todo.id !== foundTodoId)
        
        setTodos([...filteredTodos]);
        window.localStorage.setItem('todos', JSON.stringify([...filteredTodos]))
        
    }
    
    const handleComplete = (evt) => {
        const { todoId } = evt.target.dataset
        
        const foundTodoId = Number(todoId)
        
        const foundTodo = todos.find(todo => todo.id === foundTodoId)
        
        foundTodo.isCompleted = !foundTodo.isCompleted
        
        
        setTodos([...todos])
        window.localStorage.setItem('todos', JSON.stringify([...todos]))
        
    }
    
    
    
    
    
    return (
        <>
        <h1 className='heading'>Todo List</h1>
        
        
        <input className='input' placeHolder='Todo Yozing ...' type="text" onKeyUp={addTodo} />
        
        <ul>
        {todos.length > 0 && renderType === 'all' && todos.map((todo) => (
            
            <Todo key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} todo={todo}>
            
            {todo.text}
            </Todo>
            ))}
            
            
            {completed.length > 0 && renderType === 'completed' && completed.map((todo) => (
                
                <Todo key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} todo={todo}>
                
                {todo.text}
                </Todo>
                ))}
                
                
                {unCompleted.length > 0 && renderType === 'unCompleted' && unCompleted.map((todo) => (
                    
                    <Todo key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} todo={todo}>
                    
                    {todo.text}
                    </Todo>
                    ))}
                    </ul>
                    
                    
                    <div>
                    
                    <span className='math-todo'>Sizning Todo laringiz soni {todos.length} taga yetdi</span>
                    
                    <div className="buttons">

                    <button className='all-button'  onClick={() => setRenderType('all')}>All</button>
                    
                    <button className='completed-button' onClick={() => {
                        setRenderType('completed')
                        
                        const filteredTodos = todos.filter(todo => todo.isCompleted)
                        
                        setCompleted(filteredTodos)
                        
                    }}>Completed</button>
                    
                    <button className='uncompleted-button' onClick={() => {
                        setRenderType('unCompleted')
                        
                        
                        const filteredTodos = todos.filter(todo => !todo.isCompleted)
                        
                        setUnCompleted(filteredTodos)
                    }}>Uncompleted</button>
                    </div>
                    </div>
                    
                    </>
                    );
                }
                
                export default App;
                
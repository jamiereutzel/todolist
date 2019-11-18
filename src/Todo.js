import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick() { toggleTodo(todo.id) }

    return (
        <div class="todo">
            <label class="cb-container">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                <h3>{todo.name}</h3>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}

import React from 'react';
import './scss/styles.scss'

function App() {
  return (
    <>
      <h1>Todo List</h1>

      <div>
        <input type="text" />
        <button class="btn ml-1">Add</button>
        <button class="btn ml-1">Clear Completed</button>
      </div>
    </>
  )
}

export default App;

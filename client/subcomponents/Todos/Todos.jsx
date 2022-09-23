import React, { useEffect, useState } from 'react'

import Todo from './Todo'
import { getTodos, getTodosByUserId } from '../../api/todos'
import AddTodo from './AddTodo'

function Todos() {
  const [todos, setTodos] = useState([])
  const [addClicked, setAddClicked] = useState(false)

  function loadTodos() {
    getTodosByUserId(2)
      .then((todos) => {
        setTodos(todos)
      })
      .catch(() => {
        //dispatch(showError(err.message))
        return false
      })
    return true
  }

  useEffect(() => {
    loadTodos()
  }, [])

  function handleClick(event) {
    event.preventDefault()
    setAddClicked(!addClicked)
  }

  return (
    <>
      <h1>To do:</h1>
      <div className="font-serif ">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} loadTodos={loadTodos} />
        ))}
        {!addClicked && (
          <button
            onClick={handleClick}
            className="bg-blue hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
          >
            Add
          </button>
        )}
      </div>
      {addClicked && (
        <div>
          <AddTodo loadTodos={loadTodos} />
        </div>
      )}
    </>
  )
}

export default Todos

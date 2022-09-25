import React, { useEffect, useState, useRef } from 'react'

import Todo from './Todo'
import { getTodos, getTodosByUserId } from '../../api/todos'
// import AddTodo from './AddTodo'
import AddTodo from './AdminAddTodo'

function Todos() {
  const [todos, setTodos] = useState([])
  const [addClicked, setAddClicked] = useState(false)
  const [dialogAddOpen, setDialogAddOpen] = useState(false)
  const currentUserId = 2
  const ref1 = useRef(null)

  function loadTodos() {
    getTodosByUserId(currentUserId)
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

  console.log('current todos for user 2', todos)
  return (
    <>
      <h1>To do:</h1>
      <div className="font-serif ">
        {todos.map((todo) => (
          <Todo
            key={todo.user_todos_id}
            todo={todo}
            loadTodos={loadTodos}
            currentUserId={currentUserId}
          />
        ))}
        {!addClicked && (
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
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

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

  console.log(todos)

  function handleClick(event) {
    event.preventDefault()
    setAddClicked(!addClicked)
  }

  return (
    <>
      <div className="flex flex-col relative bg-vslightblack rounded p-1.5 m-2 mt-1 text-left">
        <span>Things to do:</span>

        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} loadTodos={loadTodos} />
        ))}
        {!addClicked && (
          <img
            src="images/addico.png"
            className='absolute top-2 right-1'
            onClick={handleClick}
            alt="add"
          />
        )}

        {addClicked && (
          <div>
            <AddTodo loadTodos={loadTodos} />
          </div>
        )}
      </div>
    </>
  )
}

export default Todos

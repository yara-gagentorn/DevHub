import React, { useEffect, useState } from 'react'

import Todo from './Todo'
import { getTodosByUserId } from '../../api/todos'
// import AddTodo from './AddTodo'
import AdminAddTodo from './AdminAddTodo'

function Todos() {
  const [todos, setTodos] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const currentUserId = 2

  function loadTodos() {
    getTodosByUserId(currentUserId)
      .then((todos) => {
        setTodos(todos)
      })
      .catch(() => {
        return false
      })
    return true
  }

  useEffect(() => {
    loadTodos()
  }, [])

  function handleClick(event) {
    event.preventDefault()
    setShowAdd(!showAdd)
  }

  //console.log('current todos for user 2', todos)
  return (
    <>
      <div className="bg-[#FEC02D] text-white text-center">
        <h1>To do:</h1>
        {todos.map((todo) => (
          <Todo
            key={todo.user_todos_id}
            todo={todo}
            loadTodos={loadTodos}
            currentUserId={currentUserId}
          />
        ))}

        <button
          //className={addClicked ? 'invisible' : 'visible'}
          onClick={handleClick}
          className={showAdd ? 'hidden' : ''}
          //className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
        >
          Add
        </button>
      </div>
      <div>
        <AdminAddTodo
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          loadTodos={loadTodos}
        />
      </div>
    </>
  )
}

export default Todos

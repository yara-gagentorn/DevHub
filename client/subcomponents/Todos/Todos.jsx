import React, { useEffect, useState } from 'react'

import Todo from './Todo'
import { getTodos } from '../../api/todos'
import AddTodo from './AddTodo'

function Todos() {
  const todos = [
    {
      id: 1,
      user_id: 2,
      date: '23-09-2022',
      content: 'challenge with fruits',
      challenge_link: '',
      inTrello: true,
      isDone: false,
      isPersonal: false,
    },
    {
      id: 2,
      user_id: 2,
      date: '23-09-2022',
      content: 'wash my cat',
      challenge_link: '',
      inTrello: false,
      isDone: false,
      isPersonal: true,
    },
    {
      id: 3,
      user_id: 2,
      date: '23-09-2022',
      content: 'read the article about Redux',
      challenge_link: 'https://www.merriam-webster.com/dictionary/redux',
      inTrello: false,
      isDone: true,
      isPersonal: false,
    },
    {
      id: 4,
      user_id: 2,
      date: '23-09-2022',
      content: 'leave feedback about pair programming with John',
      challenge_link: '',
      inTrello: false,
      isDone: false,
      isPersonal: false,
    },
  ]

  //const [todos, setTodos] = useState([])
  const [addClicked, setAddClicked] = useState(false)

  function loadTodos() {
    // getTodos()
    //   .then((todos) => {
    //     setTodos(todos)
    //   })
    //   .catch(() => {
    //     //dispatch(showError(err.message))
    //     return false
    //   })
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
      <div className="w-50">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} loadTodos={loadTodos} />
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

import React, { useState } from 'react'
import { addTodo } from '../../api/todos'

function AddTodo(props) {
  const setAddClicked = props.setAddClicked

  const loadTodos = props.loadTodos
  const [input, setInput] = useState('')
  const [clicked, setClicked] = useState(true)

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTodo = {
      content: input,
      challenge_link: '',
      is_trello: false,
      publish_date: new Date(),
    }
    const newUserTodo = {
      is_personal: true,
      is_done: false,
      user_id: 2,
    }

    addTodo(newTodo, newUserTodo)
      .then(() => loadTodos())
      .catch(() => {})
    //setClicked(!clicked)
  }
  return (
    <>
      {clicked && (
        <>
          <input type="text" onChange={handleChange} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
            onClick={handleSubmit}
          >
            Add
          </button>
        </>
      )}
    </>
  )
}

export default AddTodo

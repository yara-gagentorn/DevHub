import React, { useState } from 'react'
import { addTodo } from '../../api/todos'

function AddTodo(props) {
  const { loadTodos } = props.loadTodos
  const [input, setInput] = useState('')
  const [clicked, setClicked] = useState(true)
  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(event) {
    // addTodo
    event.preventDefault()
    addTodo(input)
      .then(() => loadTodos())
      .catch(() => {})
    setClicked(!clicked)
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
          </button>{' '}
        </>
      )}
    </>
  )
}

export default AddTodo

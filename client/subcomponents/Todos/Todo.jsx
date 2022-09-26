import React from 'react'
import { updateTodo, deleteTodo } from '../../api/todos'
// import Trello from '../Icons/Trello'

function Todo(props) {
  const {
    id,
    user_id,
    date,
    content,
    challenge_link,
    inTrello,
    isDone,
    isPersonal,
  } = props.todo

  const { loadTodos } = props.loadTodos

  function handleBoxChecked() {
    // on click change the value in the db
    const newTodo = { ...props.todo, isDone: !props.todo.isDone }
    updateTodo(newTodo)
      .then(() => loadTodos())
      .catch(() => {})
  }

  function handleDelete() {
    // on click change the value in the db
    console.log('Delete')
    // deleteTodo(id)
    //   .then(() => loadTodos())
    //   .catch(() => {})
  }

  return (
    <>
      <div className={isDone ? 'line-through text-vsgrey	' : ''}>
        <input
          className="mr-2 accent-vsgrey"
          onChange={handleBoxChecked}
          type="checkbox"
          name=""
          value=""
          checked={isDone && 'checked'}
        />

        {challenge_link ? (
          <a href={challenge_link} className="no-underline">
            {content}
          </a>
        ) : (
          content
        )}

        {!!inTrello && (
          <span className="">
            <img
              src="images/trelloico.png"
              className="inline ml-2 mb-1 w-4"
              alt="trello"
            />
          </span>
        )}
        {!!isPersonal && (
          <span className=" text-zinc-400" onClick={handleDelete}>
             <img
              src="images/deleteico.png"
              className="inline ml-2 mb-1 w-4"
              alt="delete"
            />
           
          </span>
        )}
      </div>
    </>
  )
}

export default Todo

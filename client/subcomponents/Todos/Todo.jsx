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
    currentUserId,
  } = props.todo

  const loadTodos = props.loadTodos

  function handleBoxChecked() {
    console.log('inicial', props.todo)
    const newTodo = {
      ...props.todo,
      isDone: !props.todo.isDone,
    }
    console.log('changed', newTodo)
    updateTodo(newTodo, currentUserId)
      .then(loadTodos())
      .catch(() => {})
  }

  function handleDelete() {
    deleteTodo(id)
      .then(() => loadTodos())
      .catch(() => {})
  }

  return (
    <>
      <div className={isDone ? 'line-through text-vsblack	' : ' text-vsgreen'}>
        <input
          className="accent-gray-300"
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

        {!!inTrello && <span className="text-sky-400">Trello</span>}
        {!!isPersonal && (
          <span className=" text-zinc-400" onClick={handleDelete}>
            Delete
          </span>
        )}
      </div>
    </>
  )
}

export default Todo

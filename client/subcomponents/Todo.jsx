import React from 'react'

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

  function handleChecked() {
    //
  }

  return (
    <>
      <div className={isDone ? 'line-through' : ''}>
        <input
          onChange={handleChecked}
          type="checkbox"
          name="vehicle1"
          value="Bike"
          checked={isDone && 'checked'}
        />
        {content}
        {isPersonal && <span className='text-sky-400'>Delete</span>}
      </div>
    </>
  )
}

export default Todo

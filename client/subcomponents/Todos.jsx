import React, { useEffect } from 'react'

import Todo from '../subcomponents/Todo'

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
      inTrello: true,
      isDone: false,
      isPersonal: false,
    },
  ]

  return (
    <>
      <div className="w-50">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

export default Todos

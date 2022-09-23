import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos() {
  //fake data

  // const todos = [
  //   {
  //     id: 1,
  //     user_id: 2,
  //     date: '23-09-2022',
  //     content: 'challenge with fruits',
  //     challenge_link: '',
  //     inTrello: true,
  //     isDone: false,
  //     isPersonal: false,
  //   },
  //   {
  //     id: 2,
  //     user_id: 2,
  //     date: '23-09-2022',
  //     content: 'wash my cat',
  //     challenge_link: '',
  //     inTrello: false,
  //     isDone: false,
  //     isPersonal: true,
  //   },
  //   {
  //     id: 3,
  //     user_id: 2,
  //     date: '23-09-2022',
  //     content: 'read the article about Redux',
  //     challenge_link: 'https://www.merriam-webster.com/dictionary/redux',
  //     inTrello: false,
  //     isDone: true,
  //     isPersonal: false,
  //   },
  //   {
  //     id: 4,
  //     user_id: 2,
  //     date: '23-09-2022',
  //     content: 'leave feedback about pair programming with John',
  //     challenge_link: '',
  //     inTrello: true,
  //     isDone: false,
  //     isPersonal: false,
  //   },
  // ]

  return request
    .get(`${rootUrl}/todos`)
    .then((res) => res.body.todos)
    .catch(logError)
}

export function addTodo(todo, token) {
  return request
    .post(`${rootUrl}/todos`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo })
    .then((res) => res.body.todos)
    .catch(logError)
}

export function updateTodo(todo, token) {
  return request
    .put(`${rootUrl}/todos`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo })
    .then((res) => res.body.todos)
    .catch(logError)
}

export function deleteTodo(id, token) {
  return request
    .delete(`${rootUrl}/todos`)
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body.todos)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error('Access error')
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}

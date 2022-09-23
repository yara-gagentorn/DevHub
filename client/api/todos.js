import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos() {
  return request
    .get(`${rootUrl}/todos`)
    .then((res) => res.body.todos)
    .catch(logError)
}

export function getTodosByUserId(userId) {
  return request
    .get(`${rootUrl}/todos/${userId}`)
    .then((res) => res.body.todos)
    .catch(logError)
}

export function addTodo(todo, usertodo, token) {
  console.log('from api', todo)
  return request
    .post(`${rootUrl}/todos`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo, usertodo })
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
    .delete(`${rootUrl}/todos/${id}`)
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

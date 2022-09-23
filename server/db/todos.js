const connection = require('./connection')

module.exports = {
  getAllTodos,
  getTodosByUserId,
  getTodosByUserIdAndDate,
  updateTodo,
  addTodo,
  deleteTodo,
}

// sort by date
// function sort(fruitArray) {
//   const allFruits = [...fruitArray]
//   allFruits.sort((a, b) => a.id - b.id)
//   return allFruits
// }

// GET all todos
function getAllTodos(db = connection) {
  return db('user_todos')
    .join('todos', 'user_todos.todo_id', 'todos.id')
    .join('users', 'user_todos.user_id', 'users.id')
    .select(
      'todos.id as id',
      'users.id as user_id',
      'publish_date as date',
      'content',
      'challenge_link',
      'is_trello as inTrello',
      'is_done as isDone',
      'is_personal as isPersonal'
    )
}

//GET todos by user id
function getTodosByUserId(id) {
  return getAllTodos().where('user_id', id)
}

//GET todos by user id
function getTodosByUserIdAndDate(id, date) {
  return getAllTodos().where('users_id', id).where('publish_date', date)
}

function addTodo(todo, usertodo, db = connection) {
  return db('todos')
    .insert(todo)
    .then((id) => db('user_todos').insert({ ...usertodo, todo_id: id }))
}

function updateTodo(newTodo, user, db = connection) {
  return db('user_todos')
    .where('todo_id', newTodo.id)
    .first()
    .then(() => {
      return db('user_todos').where('todo_id', newTodo.id).update(newTodo)
    })
    .then(() => db)
}

async function deleteTodo(id, db = connection) {
  return db('todos')
    .where('id', id)
    .first()
    .delete()
    .then(() => {
      return db('user_todos').where('todo_id', id).delete()
    })
    .then(() => db)
}

// function authorizeUpdate(fruit, auth0Id) {
//   if (fruit.added_by_user !== auth0Id) {
//     throw new Error('Unauthorized')
//   }
// }

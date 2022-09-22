const connection = require('./connection')

module.exports = {
  getAllTodos,
  getTodosByUserId,
  getTodosByUserIdAndDate,
}

// sort by date
// function sort(fruitArray) {
//   const allFruits = [...fruitArray]
//   allFruits.sort((a, b) => a.id - b.id)
//   return allFruits
// }

// GET all todos
function getAllTodos(db = connection) {
  return db('users_todos')
    .join('todos', 'users_todos.todo_id', 'todos.id')
    .join('users', 'users_todos.user_id', 'users.id')
    .select(
      'todos.id as id',
      'users.id as user_id',
      'publish_date as date',
      'content',
      'challenge_link',
      'inTrello',
      'isDone',
      'isPersonal'
    )
}

//GET todos by user id
function getTodosByUserId(id) {
  return getAllTodos().where('users_id', id)
}

//GET todos by user id
function getTodosByUserIdAndDate(id, date) {
  return getAllTodos().where('users_id', id).where('publish_date', date)
}

// function sort(fruitArray) {
//   const allFruits = [...fruitArray]
//   allFruits.sort((a, b) => a.id - b.id)
//   return allFruits
// }

// async function getTodos(db = connection) {
//   return db('todos')
//     .select(
//       'id',
//       'name',
//       'average_grams_each as averageGramsEach',
//       'added_by_user as addedByUser'
//     )
//     .then(sort)
// }

// async function addFruit(fruit, db = connection) {
//   return db('fruits')
//     .insert(fruit)
//     .then(() => db)
//     .then(getFruits)
//     .then(sort)
// }

// async function updateFruit(newFruit, user, db = connection) {
//   return db('fruits')
//     .where('id', newFruit.id)
//     .first()
//     .then((fruit) => authorizeUpdate(fruit, user))
//     .then(() => {
//       return db('fruits').where('id', newFruit.id).update(newFruit)
//     })
//     .then(() => db)
//     .then(getFruits)
//     .then(sort)
// }

// async function deleteFruit(id, auth0Id, db = connection) {
//   return db('fruits')
//     .where('id', id)
//     .first()
//     .then((fruit) => authorizeUpdate(fruit, auth0Id))
//     .then(() => {
//       return db('fruits').where('id', id).delete()
//     })
//     .then(() => db)
//     .then(getFruits)
//     .then(sort)
// }

// function authorizeUpdate(fruit, auth0Id) {
//   if (fruit.added_by_user !== auth0Id) {
//     throw new Error('Unauthorized')
//   }
// }

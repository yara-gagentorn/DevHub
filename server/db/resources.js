const connection = require('./connection')

module.exports = {
  getAllResources,
}

// GET all todos
function getAllResources(db = connection) {
  console.log('hitting DB get all resources')
  return db('resources')
    .join('users', 'resources.user_id', 'users.id')
    .select(
      'resources.id as id',
      'resources.description as description',
      'resources.url as url',
      'resources.icon as icon',
      'resources.date as date',
      'users.first_name as first_name'
    )
}

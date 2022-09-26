const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
  getAllUserImages,
  getProfileInfo,
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => {
      return usersFound.length > 0
    })
}

function getUser(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function getAllUserImages(db = connection) {
  return db('users').select('id', 'first_name', 'last_name', 'profile_picture')
}

function getProfileInfo(db = connection) {
  return db('users').select(
    'id',
    'first_name',
    'last_name',
    'cohort',
    'pronouns',
    'github_link',
    'profile_picture'
  )
}

const connection = require('./connection')

module.exports = {
  getAllAnnouncements,
  getAnnouncementsByUserId,
  getAnnouncementsByUserIdAndDate,
}

// GET all announcements
// function getAllAnnouncements(db = connection) {
//   return db('users_todos')
//     .join('todos', 'users_todos.todo_id', 'todos.id')
//     .join('users', 'users_todos.user_id', 'users.id')
//     .select(
//       'todos.id as id',
//       'users.id as user_id',
//       'publish_date as date',
//       'content',
//       'challenge_link',
//       'inTrello',
//       'isDone',
//       'isPersonal'
//     )
// }

//GET Announcements by user id
function getAnnouncementsByUserId(id) {
  return getAllAnnouncements().where('users_id', id)
}

//GET Announcements by user id
function getAnnouncementsByUserIdAndDate(id, date) {
  return getAllAnnouncements().where('users_id', id).where('publish_date', date)
}

const connection = require('./connection')

module.exports = {
  getAllAnnouncements,
  getAnnouncementsByDate,
  addAnnouncement,
  deleteAnnouncement,
}

// GET all announcements
function getAllAnnouncements(db = connection) {
  return db('announcements')
    .join('users', 'announcements.user_id', 'users.id')
    .select(
      'announcements.id as id',
      'announcements.message as message',
      'announcements.URL as url',
      'announcements.date as date',
      'users.id as user_id'
    )
}

//GET Announcements by date
function getAnnouncementsByDate(date) {
  return getAllAnnouncements().where('date', date)
}

function addAnnouncement(announcement, db = connection) {
  return db('announcements').insert(announcement)
}

function deleteAnnouncement(id, db = connection) {
  return db(`announcements`)
    .where('id', id)
    .first()
    .delete()
    .then(getAllAnnouncements)
}

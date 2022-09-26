const connection = require('./connection')

module.exports = {
  getAllJournals,
  updateJournal,
}

// GET all todos
function getAllJournals(db = connection) {
  return db('journals').select()
}

function updateJournal(id, date, updatedJournal, db = connection) {
  return db('journals')
    .where('user_id', '=', id)
    .where('date', '=', date)
    .update({ content: updatedJournal.content })
}

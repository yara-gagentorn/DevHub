import request from 'superagent'

const rootUrl = '/api/v1'

export function getJournalByIdNDate(id, date) {
  return request
    .get(`${rootUrl}/journal/${id}/${date}`)
    .then((res) => res.body.journalsByDateNId[0])
    .catch(logError)
}

export function updateJournalByIdNDate(id, date, journal) {
  return request
    .post(`${rootUrl}/journal/${id}/${date}`)
    .send(journal)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}

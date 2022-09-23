import request from 'superagent'

const rootUrl = '/api/v1'

export function getAnnouncements() {
  return request
    .get(`${rootUrl}/announcements`)
    .then((res) => res.body.announcements)
    .catch(logError)
}

export function addAnnouncements(todo, token) {
  return request
    .post(`${rootUrl}/announcements`)
    .set('authorization', `Bearer ${token}`)
    .send({ announcements })
    .then((res) => res.body.announcements)
    .catch(logError)
}

export function updateAnnouncements(announcements, token) {
  return request
    .put(`${rootUrl}/announcements`)
    .set('authorization', `Bearer ${token}`)
    .send({ announcements })
    .then((res) => res.body.announcements)
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

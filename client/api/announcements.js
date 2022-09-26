import request from 'superagent'

const rootUrl = '/api/v1'

export function getAnnouncements() {
  return request
    .get(`${rootUrl}/announcements`)
    .then((res) => res.body.announcements)
    .catch(logError)
}

export function getAnnouncementsByDate(date) {
  return request
    .get(`${rootUrl}/announcements/${date}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addAnnouncement(announcement) {
  return request
    .post(`${rootUrl}/announcements/`)
    .send(announcement)
    .catch(logError)
}

export function deleteAnnouncement(id) {
  return request
    .delete(`${rootUrl}/announcements/${id}`)
    .then((res) => {
      return res.body
    })
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

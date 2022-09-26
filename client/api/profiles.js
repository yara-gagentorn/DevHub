import request from 'superagent'

const rootUrl = '/api/v1'

export function getUserProfileInfo() {
  return request.get(`${rootUrl}/profiles`).then((res) => res.body.profile)
}

export function editProfile(profile, token) {
  return request
    .put(`${rootUrl}/profiles`)
    .set('authorization', `Bearer ${token}`)
    .send({ profile })
    .then((res) => res.body.profile)
}

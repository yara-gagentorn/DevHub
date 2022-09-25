import request from 'superagent'

const rootUrl = '/api/v1'

export function getUserProfileInfo() {
  return request.get(`${rootUrl}/profiles`).then((res) => res.body.profile)
}

const express = require('express')
const { checkJwt, getUserRoles } = require('../auth0')

const db = require('../db/users')
const router = express.Router()

// TODO: use checkJwt as middleware
// GET /api/v1/users/
router.get('/', checkJwt, async (req, res) => {
  try {
    const auth0Id = req.user?.sub
    const user = await db.getUser(auth0Id)
    const roles = await getUserRoles(auth0Id)
    res.json({ ...user, roles })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// TODO: use checkJwt as middleware
// POST /api/v1/users
router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { username, icon } = req.body
  const userDetails = {
    auth0_id,
    username,
    icon,
  }

  db.userExists(username)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.createUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router

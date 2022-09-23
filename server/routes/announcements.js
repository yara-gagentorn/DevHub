const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/announcements')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await db.getAllAnnouncements()
    res.json({ announcements })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

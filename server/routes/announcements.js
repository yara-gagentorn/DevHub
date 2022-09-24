const express = require('express')
const { async } = require('regenerator-runtime')
const checkJwt = require('../auth0')
const db = require('../db/announcements')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/announcements
router.get('/', async (req, res) => {
  try {
    console.log('using normal route')
    const announcements = await db.getAllAnnouncements()
    res.json({ announcements })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/:date', async (req, res) => {
  const currentDate = new Date(req.params.date).toDateString()

  try {
    console.log('using :date route')
    const announcements = await db.getAllAnnouncements()
    const currentDateAnnouncements = announcements
      .map((announcement) => {
        let stringDate = new Date(announcement.date).toDateString()
        return { ...announcement, date: stringDate }
      })
      .filter((announcement) => announcement.date === currentDate)
    res.json(currentDateAnnouncements)
  } catch (error) {
    console.error(error.message)
  }
})

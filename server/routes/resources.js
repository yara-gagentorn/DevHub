const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/resources')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  try {
    const resources = await db.getAllResources()
    res.json({ resources })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/:date', async (req, res) => {
  const selectedDate = new Date(req.params.date).toDateString()

  try {
    const resources = await db.getAllResources()
    const resourceByDate = resources
      .map((resource) => {
        let stringDate = new Date(resource.date).toDateString()
        return { ...resource, date: stringDate }
      })
      .filter((resource) => resource.date === selectedDate)
    res.json(resourceByDate)
  } catch (error) {}
})

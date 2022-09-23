const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const userRoutes = require('./routes/users')
<<<<<<< HEAD
const announcementsRoutes = require('./routes/announcements')
=======
>>>>>>> 1eda1b221b86b090dea7258d37d8a2081512dc8c

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/api/v1/announcements', announcementsRoutes)
=======
>>>>>>> 1eda1b221b86b090dea7258d37d8a2081512dc8c
server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server

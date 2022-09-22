const path = require('path')
const express = require('express')

const todosRoutes = require('./routes/todos')
const announcementsRoutes = require('./routes/announcements')
const resourcesRoutes = require('./routes/resources')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.use('/api/v1/announcements', announcementsRoutes)
server.use('/api/v1/todos', todosRoutes)
server.use('/api/v1/resources', resourcesRoutes)
server.use('/api/v1/onthefloor', onthefloorRoutes)
server.use('/api/v1/profile', profileRoutes)



server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server

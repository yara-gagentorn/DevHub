const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/todos')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()
    res.json({ todos })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const todos = await db.getTodosByUserId(userId)
    res.json({ todos })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// POST /api/v1/todos
router.post('/', async (req, res) => {
  const { todo, usertodo } = req.body
  // const auth0Id = req.user?.sub

  try {
    const todos = await db.addTodo(todo, usertodo)
    res.json({ todos })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// PUT /api/v1/todos
router.put('/', async (req, res) => {
  const { todo } = req.body
  const todoToUpdate = {
    id: todo.id,
    is_done: todo.isDone,
  }
  try {
    const fruits = await db.updateTodo(todoToUpdate)
    res.json({ fruits })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Unauthorized: Only the user who added the fruit may update it')
    }
    res.status(500).send(err.message)
  }
})

// DELETE /api/v1/todos
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todos = await db.deleteTodo(id)
    res.json({ todos })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Unauthorized: Only the user who added the fruit may delete it')
    }
    res.status(500).send(err.message)
  }
})

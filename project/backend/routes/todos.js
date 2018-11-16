const express = require('express')
const router = express.Router()
const Controller = require('../controllers/todos')

router.get('/', (req, res) => {
 Controller.gettodos().then(todos => res.json(todos))
})

router.post('/', (req, res) => {
  const { item, checkbool } = req.body
  Controller
    .addtodos(item, checkbool)
    .then(todo => res.json(todo))
})

router.put('/', (req, res) => {
  const { todoInfo } = req.body
  Controller
    .updatetodo(todoInfo)
    .then(todo => res.json(todo))
})

router.delete('/', (req, res) => {
  console.log(req.body)
  const { id } = req.body
  Controller
    .deletetodo(id)
    .then(todo => res.json(todo))
})

module.exports = router
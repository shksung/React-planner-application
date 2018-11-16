const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080
const cors = require('cors')
app.use(cors())

const todoRouter = require('./routes/todos')

app.use(bodyParser.json())
app.use('/todos', todoRouter)

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
/*
const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        user: 'kevinsung', // or other user if you made one
        password: '',
        database: 'todo-database'
    }
})
const bookshelf = require('bookshelf')(knex)

const Todo = bookshelf.Model.extend({
    tableName: 'todos', // what you named your table as
})

app.get('/', (req, res) => {
    Todo
        .fetchAll()
        .then(todos => {
            const todoData = todos.models.map(
                todo => todo.attributes)
            res.json(todoData)
        })
})

app.post('/', (req, res) => {
    const { name, program, grade } = req.body
    StudentController
      .addStudent(name, program, grade)
      .then(student => res.json(student))
  })
  */
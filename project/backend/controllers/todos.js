

const Todo = require('../models/todos')

module.exports = {
    gettodos: () => {
      return new Promise((resolve, reject) => {
       Todo
          .fetchAll()
          .then(todos => {
            resolve(todos.models.map(todo => todo.attributes))
          })
      })
    },
    addtodos: (item, checkbool) => {
      
      return new Promise((resolve, reject) => {
        new Todo({
            item,
            checkbool
          }).save()
          .then(todo => {
            resolve(todo.attributes)
          })
      })
    },
    deletetodo: (id) => {
      return new Promise((resolve, reject) => {
        new Todo({
            id
          })
          .destroy()
          .then(todo => resolve(todo))
      })
    },
    updatetodo: (todoInfo) => {
      return new Promise((resolve, reject) => {
        const attributesToUpdate = {
          item: todoInfo.item,
        }
        new Todo({
            id: todoInfo.id
          })
          .save(attributesToUpdate, {
            patch: true
          })
          .then(todo => {
            resolve(todo.attributes)
          })
      })
    }
  }
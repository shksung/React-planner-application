const bookshelf = require('./bookshelf')

const Todo = bookshelf.Model.extend({
  tableName: 'todos'
})

module.exports = Todo
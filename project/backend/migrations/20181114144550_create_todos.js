
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('todos', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.string('item') 
            .notNullable() ;
        table.boolean('checkbool')
            .notNullable()

    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos')
  };

  
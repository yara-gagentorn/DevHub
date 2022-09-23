/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_todos', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.integer('todo_id')
    table.boolean('is_done')
    table.boolean('is_personal')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('user_todos')
}

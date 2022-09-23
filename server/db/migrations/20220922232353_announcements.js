/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('announcements', (table) => {
    table.increments('id')
    table.string('message')
    table.date('date')
    table.string('URL')
    table.integer('user_id').references()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('announcements')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

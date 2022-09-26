/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('id'),
      table.string('description'),
      table.string('URL'),
      table.string('icon'),
      table.date('date'),
      table.integer('user_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('resources')
}

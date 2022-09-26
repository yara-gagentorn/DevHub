/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('onthefloor', (table) => {
    table.increments('id'),
      table.integer('user_id').references(),
      table.date('date'),
      table.integer('time_start'),
      table.integer('time_finish')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('onthefloor')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('journals', (table) => {
    table.increments('id'),
      table.integer('user_id').references(),
      table.date('date'),
      table.string('content'),
      table.string('URL_1'),
      table.string('URL_2'),
      table.string('URL_3')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('journals')
}

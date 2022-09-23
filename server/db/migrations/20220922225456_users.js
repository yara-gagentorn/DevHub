/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('role')
    table.integer('todos_id').references()
    table.integer('resources_id').references()
    table.integer('journal_id').references()
    table.integer('auth0_id')
    table.blob('profile_picture')
    table.string('pronouns')
    table.string('github_link')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}

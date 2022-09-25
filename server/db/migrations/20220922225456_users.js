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
    table.string('cohort')
    table.string('auth0_id')
    table.string('profile_picture')
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

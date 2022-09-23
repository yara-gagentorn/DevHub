exports.seed = (knex) => {
  return knex('user_todos')
    .del()
    .then(() =>
      knex('user_todos').insert([
        {
          id: 1,
          user_id: 1,
          todo_id: 1,
          is_done: true,
          is_personal: false,
        },
        {
          id: 2,
          user_id: 2,
          todo_id: 2,
          is_done: true,
          is_personal: false,
        },
      ])
    )
}

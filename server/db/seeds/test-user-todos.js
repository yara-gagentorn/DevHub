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
          todo_id: 1,
          is_done: false,
          is_personal: false,
        },
        {
          id: 3,
          user_id: 1,
          todo_id: 2,
          is_done: false,
          is_personal: false,
        },
        {
          id: 4,
          user_id: 2,
          todo_id: 2,
          is_done: false,
          is_personal: false,
        },
        {
          id: 5,
          user_id: 1,
          todo_id: 3,
          is_done: false,
          is_personal: false,
        },
        {
          id: 6,
          user_id: 2,
          todo_id: 3,
          is_done: false,
          is_personal: false,
        },
        {
          id: 7,
          user_id: 1,
          todo_id: 4,
          is_done: false,
          is_personal: false,
        },
        {
          id: 8,
          user_id: 1,
          todo_id: 5,
          is_done: false,
          is_personal: false,
        },
        {
          id: 9,
          user_id: 2,
          todo_id: 5,
          is_done: false,
          is_personal: false,
        },
        {
          id: 10,
          user_id: 1,
          todo_id: 6,
          is_done: false,
          is_personal: false,
        },
        {
          id: 11,
          user_id: 2,
          todo_id: 6,
          is_done: false,
          is_personal: false,
        },
        {
          id: 12,
          user_id: 1,
          todo_id: 7,
          is_done: false,
          is_personal: false,
        },
        {
          id: 13,
          user_id: 1,
          todo_id: 8,
          is_done: false,
          is_personal: false,
        },
        {
          id: 14,
          user_id: 2,
          todo_id: 8,
          is_done: false,
          is_personal: false,
        },
        {
          id: 15,
          user_id: 1,
          todo_id: 9,
          is_done: false,
          is_personal: false,
        },
        {
          id: 16,
          user_id: 2,
          todo_id: 9,
          is_done: false,
          is_personal: false,
        },
        {
          id: 17,
          user_id: 1,
          todo_id: 10,
          is_done: false,
          is_personal: false,
        },
        {
          id: 18,
          user_id: 1,
          todo_id: 11,
          is_done: false,
          is_personal: true,
        },
      ])
    )
}

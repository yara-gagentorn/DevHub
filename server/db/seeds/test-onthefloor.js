exports.seed = (knex) => {
  return knex('onthefloor')
    .del()
    .then(() =>
      knex('onthefloor').insert([
        {
          id: 1,
          user_id: 1,
          date: null,
          time_start: null,
          time_finish: null,
        },
        {
          id: 2,
          user_id: 2,
          date: null,
          time_start: null,
          time_finish: null,
        },
      ])
    )
}

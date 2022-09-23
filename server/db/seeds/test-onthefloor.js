exports.seed = (knex) => {
  return knex('onthefloor')
    .del()
    .then(() =>
      knex('onthefloor').insert([
        {
          id: 1,
          user_id: 1,
          date: new Date('October 4, 2022, 12:05:00'),
          time_start: new Date('October 4, 2022, 14:05:00'),
          time_finish: new Date('October 4, 2022, 16:05:00'),
        },
        {
          id: 2,
          user_id: 2,
          date: new Date('October 4, 2022, 12:05:00'),
          time_start: new Date('October 4, 2022, 12:05:00'),
          time_finish: new Date('October 4, 2022, 14:05:00'),
        },
      ])
    )
}

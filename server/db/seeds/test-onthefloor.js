exports.seed = (knex) => {
  return knex('onthefloor')
    .del()
    .then(() =>
      knex('onthefloor').insert([
        {
          id: 1,
          user_id: 1,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 8,
          time_finish: 12.5,
        },
        {
          id: 2,
          user_id: 1,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 14,
          time_finish: 17,
        },
        {
          id: 3,
          user_id: 5,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 8,
          time_finish: 12.5,
        },
        {
          id: 4,
          user_id: 5,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 14,
          time_finish: 17,
        },
        {
          id: 5,
          user_id: 6,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 10,
          time_finish: 12.5,
        },
        {
          id: 6,
          user_id: 6,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 15,
          time_finish: 17,
        },
        {
          id: 7,
          user_id: 7,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 9,
          time_finish: 12.5,
        },
        {
          id: 8,
          user_id: 7,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 14,
          time_finish: 17,
        },
        {
          id: 9,
          user_id: 8,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 9,
          time_finish: 12.5,
        },
        {
          id: 10,
          user_id: 9,
          date: new Date('September 7, 2022, 12:05:00'),
          time_start: 14,
          time_finish: 17,
        },
      ])
    )
}

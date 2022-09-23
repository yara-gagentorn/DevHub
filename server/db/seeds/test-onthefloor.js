var today = new Date()

exports.seed = (knex) => {
  return knex('onthefloor')
    .del()
    .then(() =>
      knex('onthefloor').insert([
        {
          id: 1,
          user_id: 1,
          date: Date('2022-10-03'),
          time_start: today.getHours('10') + ':' + today.getMinutes('00'),
          time_finish: today.getHours('12') + ':' + today.getMinutes('30'),
        },
        {
          id: 2,
          user_id: 2,
          date: Date('2022-10-03'),
          time_start: today.getHours('13') + ':' + today.getMinutes('00'),
          time_finish: today.getHours('17') + ':' + today.getMinutes('00'),
        },
      ])
    )
}

exports.seed = (knex) => {
  return knex('journals')
    .del()
    .then(() =>
      knex('journals').insert([
        {
          id: 1,
          user_id: 1,
          title: 'Reflection on Agile',
          content: 'Agile is stinky',
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 2,
          user_id: 2,
          title: 'Learning plan reflection',
          content: 'What learning plan?',
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
      ])
    )
}

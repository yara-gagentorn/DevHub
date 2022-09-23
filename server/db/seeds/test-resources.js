exports.seed = (knex) => {
  return knex('resources')
    .del()
    .then(() =>
      knex('resources').insert([
        {
          id: 1,
          description: 'Redux full-stack',
          URL: 'https://www.youtube.com/watch?v=YvM-n2_NbOA&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=45&ab_channel=DevAcademyAotearoa',
          date: Date('2022-10-03'),
          user_id: 1,
        },
        {
          id: 2,
          description: 'Auth 0',
          URL: 'https://www.youtube.com/watch?v=PURqwTbfFL0&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=49&ab_channel=DevAcademyAotearoa',
          date: Date('2022-10-03'),
          user_id: 2,
        },
      ])
    )
}

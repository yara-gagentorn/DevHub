exports.seed = (knex) => {
  return knex('todos')
    .del()
    .then(() =>
      knex('todos').insert([
        {
          id: 1,
          publish_date: new Date('October 4, 2022, 12:05:00'),
          content: 'Learn Redux full-stack',
          challenge_link:
            'https://github.com/pohutukawa-2022/sweet-as-organics-api',
          is_trello: true,
        },
        {
          id: 2,
          publish_date: new Date('October 16, 2022, 12:05:00'),
          content: 'Auth0',
          challenge_link: 'https://github.com/pohutukawa-2022/jwt-auth',
          is_trello: true,
        },
      ])
    )
}

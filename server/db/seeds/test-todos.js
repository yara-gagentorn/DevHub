exports.seed = (knex) => {
  return knex('todos')
    .del()
    .then(() =>
      knex('todos').insert([
        {
          id: 1,
          publish_date: new Date(2022, 10, 3),
          content: 'Learn Redux full-stack',
          challenge_link:
            'https://github.com/pohutukawa-2022/sweet-as-organics-api',
          in_trello: true,
        },
        {
          id: 2,
          publish_date: Date(2022, 10, 8),
          content: 'Auth0',
          challenge_link: 'https://github.com/pohutukawa-2022/jwt-auth',
          in_trello: true,
        },
      ])
    )
}

exports.seed = (knex) => {
  return knex('todos')
    .del()
    .then(() =>
      knex('todos').insert([
        {
          id: 1,
          publish_date: null,
          content: 'Learn Redux full-stack',
          challenge_link:
            'https://github.com/pohutukawa-2022/sweet-as-organics-api',
          is_trello: true,
        },
        {
          id: 2,
          publish_date: null,
          content: 'Auth0',
          challenge_link: 'https://github.com/pohutukawa-2022/jwt-auth',
          is_trello: true,
        },
      ])
    )
}

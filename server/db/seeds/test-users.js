exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          first_name: 'Rong',
          last_name: 'Sun',
          role: 'student',
          todos_id: 1,
          resources_id: 1,
          journal_id: 1,
          auth0_id: 'auth0|123',
          profile_picture: '/profilepictures/rong.jpeg',
          pronouns: 'she/her',
          github_link: 'https://github.com/rongyue1',
        },
        {
          id: 2,
          first_name: 'Ahmad',
          last_name: 'Anwar',
          role: 'facilitator',
          todos_id: 2,
          resources_id: 2,
          journal_id: 2,
          auth0_id: 'auth0|124',
          profile_picture: '/profilepictures/ahmad.jpeg',
          pronouns: 'he/him',
          github_link: 'https://github.com/AhmedAnwarHafez',
        },
      ])
    )
}

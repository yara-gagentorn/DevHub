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
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|123',
          profile_picture: './profilepictures/rong.jpeg',
          pronouns: 'she/her',
          github_link: 'https://github.com/rongyue1',
        },
        {
          id: 2,
          first_name: 'Ahmad',
          last_name: 'Anwar',
          role: 'facilitator',
          cohort: null,
          auth0_id: 'auth0|124',
          profile_picture: './profilepictures/ahmad.jpeg',
          pronouns: 'he/him',
          github_link: 'https://github.com/AhmedAnwarHafez',
        },
      ])
    )
}

exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          first_name: 'Ahmad',
          last_name: 'Anwar',
          role: 'facilitator',
          cohort: null,
          auth0_id: 'auth0|632c4233fc04d8c0660e458e',
          profile_picture:
            'https://avatars.githubusercontent.com/u/7552088?v=4',
          pronouns: 'he/him',
          github_link: 'https://github.com/AhmedAnwarHafez',
        },
        {
          id: 2,
          first_name: 'Rong',
          last_name: 'Sun',
          role: 'student',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|632d1b5b563ea914bb89ed8c',
          profile_picture:
            'https://avatars.githubusercontent.com/u/92340293?v=4',
          pronouns: 'she/her',
          github_link: 'https://github.com/rongyue1',
        },
        {
          id: 3,
          first_name: 'Sebastian',
          last_name: 'Pian',
          role: 'student',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|632fb7276524576fde197f1a',
          profile_picture:
            'https://avatars.githubusercontent.com/u/89761448?s=400&u=5102839903194467b1f4786e5e8eb3394bf8dffe&v=4',
          pronouns: 'he/him',
          github_link: 'https://github.com/sebapian',
        },
        {
          id: 4,
          first_name: 'Vanessa',
          last_name: 'Gurung',
          role: 'student',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|632fc199d22706486f5ab39d',
          profile_picture:
            'https://avatars.githubusercontent.com/u/107532766?v=4',
          pronouns: 'she/her',
          github_link: 'https://github.com/vanessa-gurung',
        },
        {
          id: 5,
          first_name: 'Sophia',
          last_name: 'Lawler',
          role: 'facilitator',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|632fc1dd19f4ef37b435ff25',
          profile_picture:
            'https://avatars.githubusercontent.com/u/85972272?v=4',
          pronouns: 'she/her',
          github_link: 'https://github.com/sophia-lawler',
        },
        {
          id: 6,
          first_name: 'Clementine',
          last_name: 'Smart',
          role: 'facilitator',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|124',
          profile_picture:
            'https://avatars.githubusercontent.com/u/93062257?v=4',
          pronouns: 'she/her',
          github_link: 'https://github.com/clementine-smart',
        },
        {
          id: 7,
          first_name: 'Alex',
          last_name: 'Coaton',
          role: 'facilitator',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|125',
          profile_picture:
            'https://avatars.githubusercontent.com/u/105902365?v=4',
          pronouns: 'he/him',
          github_link: 'https://github.com/alexcoaton',
        },
        {
          id: 8,
          first_name: 'Rich',
          last_name: 'Hape',
          role: 'facilitator',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|126',
          profile_picture:
            'https://ca.slack-edge.com/T02SQPVAC-U02SCHB8Z1T-17387b99ca60-512',
          pronouns: 'he/him',
          github_link: '',
        },
        {
          id: 9,
          first_name: 'Ana',
          last_name: 'McAllister',
          role: 'facilitator',
          cohort: 'Pohutakawa',
          auth0_id: 'auth0|127',
          profile_picture:
            'https://ca.slack-edge.com/T02SQPVAC-U021YAHPAEQ-b5253e4fd8b1-512',
          pronouns: 'she/her',
          github_link: '',
        },
      ])
    )
}

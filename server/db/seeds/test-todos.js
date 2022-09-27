exports.seed = (knex) => {
  return knex('todos')
    .del()
    .then(() =>
      knex('todos').insert([
        {
          id: 1,
          publish_date: new Date('September 6, 2022, 12:05:00'),
          content: 'React to Web API - Challenge',
          challenge_link: 'https://github.com/pohutukawa-2022/react-to-web-api',
          is_trello: true,
          created_by_id: 1,
        },
        {
          id: 2,
          publish_date: new Date('September 6, 2022, 12:05:00'),
          content: 'Finish HS-05 on Trello',
          challenge_link: 'https://trello.com/',
          is_trello: true,
          created_by_id: 8,
        },
        {
          id: 3,
          publish_date: new Date('September 6, 2022, 12:05:00'),
          content: 'Testing Web API - Afternoon Challenge',
          challenge_link: 'https://github.com/pohutukawa-2022/react-to-web-api',
          is_trello: false,
          created_by_id: 6,
        },
        {
          id: 4,
          publish_date: new Date('September 6, 2022, 12:05:00'),
          content: "Prepare for tomorrow's lecture",
          challenge_link: '',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 5,
          publish_date: new Date('September 7, 2022, 12:05:00'),
          content: 'Consuming External APIs - Challenge',
          challenge_link:
            'https://github.com/pohutukawa-2022/consuming-external-apis',
          is_trello: true,
          created_by_id: 1,
        },
        {
          id: 6,
          publish_date: new Date('September 7, 2022, 12:05:00'),
          content: 'CORS APIs token - Afternoon Challenge',
          challenge_link:
            'https://github.com/pohutukawa-2022/consuming-external-apis',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 7,
          publish_date: new Date('September 7, 2022, 12:05:00'),
          content: "Prepare for tomorrow's lecture",
          challenge_link: '',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 8,
          publish_date: new Date('September 8, 2022, 12:05:00'),
          content: 'Lightning Talk',
          challenge_link: '',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 9,
          publish_date: new Date('September 8, 2022, 12:05:00'),
          content: 'Read the article about redux',
          challenge_link: 'https://www.merriam-webster.com/dictionary/redux',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 10,
          publish_date: new Date('September 8, 2022, 12:05:00'),
          content: "Prepare for tomorrow's lecture",
          challenge_link: '',
          is_trello: false,
          created_by_id: 1,
        },
        {
          id: 11,
          publish_date: new Date('September 7, 2022, 12:05:00'),
          content: 'Talk to Rich about new Game of Throne episode',
          challenge_link: '',
          is_trello: false,
          created_by_id: 1,
        },
      ])
    )
}

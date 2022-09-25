exports.seed = (knex) => {
  return knex('announcements')
    .del()
    .then(() =>
      knex('announcements').insert([
        {
          id: 1,
          message: "Please bring your laptop tomorrow, it's solo day!",
          date: new Date('September 6, 2022, 12:05:00'),
          URL: null,
          user_id: 1,
        },
        {
          id: 2,
          message: 'Please finish your Phase 2 Trellos by this Friday!',
          date: new Date('September 6, 2022, 12:05:00'),
          URL: 'https://trello.com/',
          user_id: 1,
        },
        {
          id: 3,
          message: 'Tomorrow is yoga day!',
          date: new Date('September 7, 2022, 12:05:00'),
          URL: '',
          user_id: 1,
        },
        {
          id: 4,
          message: 'We will be having lightning talks tomorrow, do not forget!',
          date: new Date('September 7, 2022, 12:05:00'),
          URL: '',
          user_id: 1,
        },
        {
          id: 5,
          message: 'Good job on Lightning Talks all!',
          date: new Date('September 8, 2022, 12:05:00'),
          URL: '',
          user_id: 1,
        },
        {
          id: 6,
          message:
            'Next week, we will be touching on Redux, please spend some time this weekend to go through the video lecture on Introduction to Redux found in Resources Week 6.',
          date: new Date('September 8, 2022, 12:05:00'),
          URL: '',
          user_id: 1,
        },
      ])
    )
}

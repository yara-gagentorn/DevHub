exports.seed = (knex) => {
  return knex('resources')
    .del()
    .then(() =>
      knex('resources').insert([
        {
          id: 1,
          description: 'REST Web APIs - Lecture Video',
          URL: 'https://www.youtube.com/watch?v=rw0oWAXH6rI&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=40&t=1677s',
          icon: 'images/api.png',
          date: new Date('September 6, 2022, 12:05:00'),
          user_id: 7,
        },
        {
          id: 2,
          description: 'Cross-origin Resource Sharing',
          URL: 'images/sharing.png',
          date: new Date('September 6, 2022, 12:05:00'),
          user_id: 5,
        },
        {
          id: 3,
          description: 'Introduction to Redux Toolkit',
          URL: 'https://www.youtube.com/watch?v=YvM-n2_NbOA&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=45&ab_channel=DevAcademyAotearoa',
          icon: 'images/reduxico.png',
          date: new Date('September 7, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 4,
          description: 'JWT Authentication with Auth 0',
          URL: 'https://www.youtube.com/watch?v=PURqwTbfFL0&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=48',
          icon: 'images/auth.png',
          date: new Date('September 7, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 5,
          description: 'Stateful React Components - Video Lecture',
          URL: 'https://www.youtube.com/watch?v=LRggoccknno&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=35&t=323s',
          icon: 'images/react.png',
          date: new Date('September 8, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 6,
          description: 'Client Side Routing with React - Video Lecture',
          URL: 'https://www.youtube.com/watch?v=ahbta0eOeYA&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=36&t=3048s',
          icon: 'images/router.png',
          date: new Date('September 8, 2022, 12:05:00'),
          user_id: 6,
        },
      ])
    )
}

exports.seed = (knex) => {
  return knex('resources')
    .del()
    .then(() =>
      knex('resources').insert([
        {
          id: 1,
          description: 'REST Web APIs - Lecture Video',
          URL: 'https://www.youtube.com/watch?v=rw0oWAXH6rI&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=40&t=1677s',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoIRsclfdgRLQ6s7V07XDrxKORDNZtvoWOFG-b0Cw&s',
          date: new Date('September 6, 2022, 12:05:00'),
          user_id: 7,
        },
        {
          id: 2,
          description: 'Cross-origin Resource Sharing',
          URL: 'https://eda-student-handbook.netlify.app/bootcamp/week5/topics/05-cors',
          date: new Date('September 6, 2022, 12:05:00'),
          user_id: 5,
        },
        {
          id: 3,
          description: 'Introduction to Redux Toolkit',
          URL: 'https://www.youtube.com/watch?v=YvM-n2_NbOA&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=45&ab_channel=DevAcademyAotearoa',
          icon: 'https://miro.medium.com/max/720/1*4sxOPaVNwxrfZ9uxVbUaKg.jpeg',
          date: new Date('September 7, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 4,
          description: 'JWT Authentication with Auth 0',
          URL: 'https://www.youtube.com/watch?v=PURqwTbfFL0&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=48',
          icon: 'https://www.quintagroup.com/blog/blog-images/saml2/auth0.png/@@images/image.png',
          date: new Date('September 7, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 5,
          description: 'Stateful React Components - Video Lecture',
          URL: 'https://www.youtube.com/watch?v=LRggoccknno&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=35&t=323s',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
          date: new Date('September 8, 2022, 12:05:00'),
          user_id: 1,
        },
        {
          id: 6,
          description: 'Client Side Routing with React - Video Lecture',
          URL: 'https://www.youtube.com/watch?v=ahbta0eOeYA&list=PL_AE4CqTqcwJf0iKsJ_rIcg2W6MBgTlcP&index=36&t=3048s',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
          date: new Date('September 8, 2022, 12:05:00'),
          user_id: 6,
        },
      ])
    )
}

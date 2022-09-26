exports.seed = (knex) => {
  return knex('journals')
    .del()
    .then(() =>
      knex('journals').insert([
        {
          id: 1,
          user_id: 1,
          date: new Date('September 6, 2022, 12:05:00'),
          content:
            'Teaching went well, I got feedback from students that I explained the technical terms very well through analogies! Yay!',
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 2,
          user_id: 2,
          date: new Date('September 6, 2022, 12:05:00'),
          content:
            "I felt that today Alex explain testing very well! I really appreciated Alex's teaching and I hope I can be as good as a tester as him!",
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 3,
          user_id: 1,
          date: new Date('September 7, 2022, 12:05:00'),
          content:
            "Today I called the students Full Stack Developers! I'm so happy to see how far they have come from when they first started coding :)",
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 4,
          user_id: 2,
          date: new Date('September 7, 2022, 12:05:00'),
          content:
            "I am so happy Ahmad called us Full Stack Developers, I feel that all my effort and countless hours have paid off into something. Can't wait to see what's in stall for me!",
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 5,
          user_id: 1,
          date: new Date('September 8, 2022, 12:05:00'),
          content: '',
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
        {
          id: 6,
          user_id: 2,
          date: new Date('September 8, 2022, 12:05:00'),
          content: '',
          URL_1: null,
          URL_2: null,
          URL_3: null,
        },
      ])
    )
}

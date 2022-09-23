exports.seed = (knex) => {
  return knex('announcements')
    .del()
    .then(() =>
      knex('announcements').insert([
        {
          id: 1,
          message: 'Yoga tomorrow!',
          date: new Date('October 3, 2022, 12:05:00'),
          URL: null,
          user_id: 1,
        },
        {
          id: 2,
          message:
            'Please fill out this spreadsheet for your graduation invites',
          date: new Date('November 21, 2022, 12:05:00'),
          URL: 'https://docs.google.com/spreadsheets/d/1S8LvLSiKYbLgPPDTx27P6_9kCtK32g1C58HFjG4PPjE/edit#gid=0',
          user_id: 2,
        },
      ])
    )
}

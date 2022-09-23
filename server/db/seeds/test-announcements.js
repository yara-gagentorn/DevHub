exports.seed = (knex) => {
  return knex('announcements')
    .del()
    .then(() =>
      knex('announcements').insert([
        {
          id: 1,
          message: 'Yoga tomorrow!',
          date: Date('2022-10-03'),
          URL: null,
          user_id: 1,
        },
        {
          id: 2,
          message:
            'Please fill out this spreadsheet for your graduation invites',
          date: Date('2022-10-03'),
          URL: 'https://docs.google.com/spreadsheets/d/1S8LvLSiKYbLgPPDTx27P6_9kCtK32g1C58HFjG4PPjE/edit#gid=0',
          user_id: 2,
        },
      ])
    )
}

import React, { useEffect } from 'react'

import Announcement from '../subcomponents/Announcement'

function Announcements() {
  const announcements = [
    {
      id: 1,
      user_id: 1,
      date: '23/9/2022',
      message: 'Next Tuesday we will have our last yoga session',
      URL: '',
    },
    {
      id: 2,
      user_id: 1,
      date: '23/9/2022',
      message:
        'Ahmad will be here on Sunday, please do not come  in and indulge him:)',
      URL: '',
    },
    {
      id: 3,
      user_id: 1,
      date: '23/9/2022',
      message: 'Have fun on your final project, enjoy!',
      URL: '',
    },
  ]

  return (
    <>
      <div>
        {announcements.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </>
  )
}

export default Announcements

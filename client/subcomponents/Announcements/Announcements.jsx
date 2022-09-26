import React, { useState, useEffect } from 'react'

import { getAnnouncements } from '../../api/announcements'
import AddAnnouncement from './AddAnnouncements'
import Announcement from './Announcement'

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

  const [addClicked, setAddClicked] = useState(false)

  function loadAnnouncements() {
    return true
  }

  useEffect(() => {
    loadAnnouncements()
  }, [])

  function handleClick(event) {
    event.preventDefault()
    setAddClicked(!addClicked)
  }

  return (
    <>
      <div>
        <h1>ANNOUNCEMENTS:</h1>
        <div className="w-50">
          {announcements.map((announcement) => (
            <Announcement
              key={announcement.id}
              announcement={announcement}
              loadannouncement={loadAnnouncements}
            />
          ))}
          {!addClicked && (
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
            >
              Add
            </button>
          )}
        </div>
        {addClicked && (
          <div>
            <AddAnnouncement loadAnnouncement={loadannouncements} />
          </div>
        )}
      </div>
    </>
  )
}

export default Announcements

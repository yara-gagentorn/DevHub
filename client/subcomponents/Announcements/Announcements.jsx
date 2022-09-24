export default Announcements
import React, { useState, useEffect } from 'react'

import {
  getAnnouncements,
  getAnnouncementsByDate,
} from '../../api/announcements'

function Announcements() {
  const [announcements, setAnnouncements] = useState([])

  const testDate = new Date('October 3, 2022, 12:05:00')

  async function loadAnnouncements() {
    try {
      const allAnnouncements = await getAnnouncementsByDate(testDate)
      setAnnouncements(allAnnouncements)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    loadAnnouncements()
  }, [])

  return (
    <div>
      <h1>ANNOUNCEMENTS:</h1>
      <ul className="">
        {announcements.map((announcement) => {
          return (
            <li key={announcement.id} className="flex align-middle w-1/2">
              <a className="align-middle" href={announcement.url}>
                {`${announcement.message}`}
              </a>
            </li>
          )
        })}
      </ul>

      {/* <button onClick={showAddButton}>Add</button>
        <AddResource showAdd={showAdd} setShowAdd={setShowAdd} /> */}
    </div>
  )
}

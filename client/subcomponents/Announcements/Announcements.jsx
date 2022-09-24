export default Announcements
import React, { useState, useEffect } from 'react'
import AddAnnouncement from './AddAnnouncement'
import { getAnnouncementsByDate } from '../../api/announcements'

function Announcements() {
  const [announcements, setAnnouncements] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  const testDate = new Date('October 3, 2022, 12:05:00')

  async function loadAnnouncements() {
    try {
      const allAnnouncements = await getAnnouncementsByDate(testDate)
      setAnnouncements(allAnnouncements)
    } catch (error) {
      console.error(error.message)
    }
  }

  function showAddButton() {
    setShowAdd(true)
  }

  useEffect(() => {
    loadAnnouncements()
  }, [announcements])

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

      <button onClick={showAddButton}>Add</button>
      <AddAnnouncement showAdd={showAdd} setShowAdd={setShowAdd} />
    </div>
  )
}

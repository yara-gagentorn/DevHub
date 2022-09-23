import React from 'react'

function Announcement(props) {
  const { id, user_id, date, message, URL } = props.announcement

  const { loadAnnouncements } = props.loadAnnouncements

  function handleDelete() {}

  return (
    <>
      <div>
        {URL ? (
          <a href={URL} className="no-underline">
            {message}
          </a>
        ) : (
          message
        )}
      </div>
    </>
  )
}

export default Announcement

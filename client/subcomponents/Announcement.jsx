import React from 'react'

function Announcement(props) {
  const { id, user_id, date, message, URL } = props.Announcement

  return (
    <>
      <div>{message}</div>
    </>
  )
}

export default Announcement

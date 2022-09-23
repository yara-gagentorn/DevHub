import React, { useState } from 'react'
import { addAnnouncement } from '../../api/announcements'

function AddAnnouncement(props) {
  const { loadAnnouncements } = props.loadAnnouncements
  const [input, setInput] = useState('')
  const [clicked, setClicked] = useState(true)
  function handleChange(event) {
    setInput(event.target.value)
  }

  // addAnnouncement
  function handleSubmit(event) {
    event.preventDefault()
    addAnnouncement(input)
      .then(() => loadAnnouncements())
      .catch(() => {})
    setClicked(!clicked)
  }
  return (
    <>
      {clicked && (
        <>
          <input type="text" onChange={handleChange} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full text-base"
            onClick={handleSubmit}
          >
            Add
          </button>{' '}
        </>
      )}
    </>
  )
}

export default AddAnnouncement

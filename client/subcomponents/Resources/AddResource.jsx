import React, { useState } from 'react'
import { addResource } from '../../api/resources'

function AddResource(props) {
  const showAdd = props.showAdd

  // TODO: Change to today's date, now for testing purpose
  const testDate = new Date('September 7, 2022, 12:05:00')

  const [form, setForm] = useState({
    description: '',
    url: '',
    icon: '',
    date: testDate, // TODO: Change to today's date
    user_id: 2, // TODO: import current USER_ID
  })

  async function handleAddResourceButton(e) {
    e.preventDefault()
    await addResource(form)
    props.setShowAdd(false)
    setForm({
      description: '',
      url: '',
      icon: '',
      date: testDate, // TODO: Change to today's date
      user_id: 2, // TODO: import current USER_ID
    })
    props.loadResources()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <form
      className={`${showAdd ? '' : 'hidden'}`}
      //onSubmit={handleAddResourceButton}
    >
      <div className="mb-1">
        <label>
          {/* <span className="mr-1 inline">Description:</span> */}
          <input
            type="text"
            name="description"
            className=" text-vsblack  rounded w-5/6 pl-1"
            onChange={handleChange}
            value={form.description}
            placeholder="Description"
          ></input>
        </label>
      </div>
      <label>
        {/* <span className="mr-1">URL:</span> */}
        <input
          className="text-vsblack  rounded w-5/6 pl-1"
          type="text"
          name="url"
          onChange={handleChange}
          value={form.url}
          placeholder="URL"
        ></input>
      </label>
      <label className="hidden">
        <span>Icon:</span>
        <input
          type="text"
          name="icon"
          onChange={handleChange}
          value="images/sharing.png"
        ></input>
      </label>
      <img
        src="images/addico.png"
        className="inline ml-2 absolute right-1 bottom-1"
        alt="add"
        onClick={handleAddResourceButton}
      />
      {/* <button>Add Resources</button> */}
    </form>
  )
}

export default AddResource

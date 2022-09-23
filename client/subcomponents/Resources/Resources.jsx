import React, { useEffect, useState } from 'react'
import { getAllResources } from '../../api/resources'
import Resource from './Resource'

function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const currDate = new Date().toDateString()
  console.log(currDate)

  async function loadResources() {
    try {
      const allResources = await getAllResources()
      setResources(allResources)
    } catch (error) {
      console.error(error.message)
    }
    // setLoading(true)
    // setError('')
    // getAllResources()
    //   .then((resource) => setResources(resource))
    //   .finally(() => setLoading(false))
    //   .catch((err) => console.error(err.message))
  }

  useEffect(() => {
    loadResources()
  }, [])

  return (
    <div>
      <h1>Resources</h1>
      <ul className="">
        {resources.map((resource) => {
          return (
            <li key={resource.id} className="flex align-middle w-1/2">
              <img src={`${resource.icon}`} className="w-12 h-8"></img>
              <a className="align-middle" href={resource.url}>
                {`${resource.description} (by ${resource.first_name})`}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className=""></ul>
    </div>
  )
}

export default Resources

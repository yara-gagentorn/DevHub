import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../api/cohort'

function Cohort() {
  const [profiles, setProfiles] = useState([])

  async function getProfiles() {
    try {
      const prof = await getUserProfile()
      setProfiles(prof)
    } catch (error) {
      console.error(error.messages)
    }
  }

  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <>
      <h1> Cohort</h1>
      <h2>Pōhutakawa</h2>
      <ul>
        {profiles.map((profile) => {
          return (
            <p key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              <button>
                <img src={profile.profile_picture} alt="" />
              </button>
            </p>
          )
        })}
      </ul>
    </>
  )
}

export default Cohort

import React, { useEffect, useState } from 'react'
import { getUserProfileInfo } from '../api/profiles'

function Profiles() {
  const [profilesInfo, setProfilesInfo] = useState([])

  async function getProfilesInfo() {
    try {
      const profInfo = await getUserProfileInfo()
      setProfilesInfo(profInfo)
    } catch (error) {
      console.error(error.messages)
    }
  }

  useEffect(() => {
    getProfilesInfo()
  }, [])

  return (
    <>
      {profilesInfo.map((profile) => {
        return (
          <h1 key={profile.id}>
            {profile.first_name} {profile.last_name} {profile.cohort}
            {profile.pronouns} <a href={profile.github_link}> Github </a>
            <img src={profile.profile_picture} alt="" />
          </h1>
        )
      })}
    </>
  )
}

export default Profiles

{
  /* <p>{profile.cohort}</p>
<p>{profile.pronouns}</p>
<p>{profile.github_link}</p>
<img src={profile.profile_picture} alt="" />
      */
}

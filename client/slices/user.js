import { createSlice } from '@reduxjs/toolkit'

const emptyUser = {
  id: '',
  first_name: '',
  last_name: '',
  cohort: '',
  auth0_id: '',
  profile_picture: '',
  pronouns: '',
  github_link: '',
  roles: '',
}

const slice = createSlice({
  name: 'user',
  initialState: emptyUser,
  reducers: {
    updateLoggedInUser: (state, { payload }) => ({ ...state, ...payload }),
    clearLoggedInUser: () => emptyUser,
  },
})

export const { clearLoggedInUser, updateLoggedInUser } = slice.actions
export default slice.reducer

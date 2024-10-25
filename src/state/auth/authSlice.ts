import { createSlice } from '@reduxjs/toolkit'
import { getUserInfoFromLS, removeUserInfoFromLS, setUserInfoToLS } from './utils'

const initialState = {
  userInfo: getUserInfoFromLS()
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      setUserInfoToLS(action.payload)
    },
    logout: state => {
      state.userInfo = null
      removeUserInfoFromLS()
    }
  }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

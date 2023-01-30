import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
        fname: '',
        lname: '',
        email: '',
        userID: ''
    },
    token: ''
  },
  reducers: {
    mutateUser: (state, actions) => {
        state.user = actions.payload;
    },
    mutateToken: (state, actions) => {
        state.token = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { mutateUser, mutateToken } = authSlice.actions

export default authSlice.reducer
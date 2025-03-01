import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    userinfo:[]
  },
  reducers: {
    signup: (state,action) => {
    state.userinfo.push(action.payload)
    
    console.log(`Updated state:`, JSON.parse(JSON.stringify(state.userinfo)));
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { signup } = signupSlice.actions

export default signupSlice.reducer
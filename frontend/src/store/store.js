import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './signupslice'

export default configureStore({
  reducer: {
    counter: signupReducer,
  },
})
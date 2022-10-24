import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Reducers/AuthReducer'

export default configureStore({
  reducer: {
    auth:AuthReducer
  },
});
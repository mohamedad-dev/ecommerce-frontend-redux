import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '../features/articleSlice'
import cartReducer from '../features/cartSlice'
import authReducer from '../features/authSlice'

const store = configureStore({
  reducer: {
    storearticles: articlesReducer,
    storecart: cartReducer,
    auth: authReducer,
  },
})
export default store

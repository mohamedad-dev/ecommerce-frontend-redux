import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../services/authservice'

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await authService.signUp(user)
      console.log(res.data)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    isLoggedIn: false,
    status: '',
  },
  extraReducers: (builder) => {
    //get articles
    builder
      //insertion user
      .addCase(register.pending, (state, action) => {
        state.isLoading = true
        state.status = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.status = null
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.status = action.payload
        state.user = null
      })
  },
})
export default authSlice.reducer

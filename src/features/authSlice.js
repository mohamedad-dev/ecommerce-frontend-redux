import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../services/authservice'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await authService.signUp(user)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await authService.signIn(user)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', () => {
  localStorage.removeItem('token')
})

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
    builder
      // register
      .addCase(register.pending, (state, action) => {
        state.isLoading = true
        state.status = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
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
      // login
      .addCase(login.pending, (state, action) => {
        state.isLoading = true
        state.status = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isLoading = false
        state.status = null
        state.isSuccess = true
        state.isLoggedIn = true
        MySwal.fire({
          icon: 'success',
          title: 'Connection was successful',
        })
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.status = action.payload
        state.user = null
        MySwal.fire({
          icon: 'error',
          title: 'Connection was refused',
        })
      })
      // logout
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false
        state.user = null
      })
  },
})
export default authSlice.reducer

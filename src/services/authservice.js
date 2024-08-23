import axios from '../Api/axios'
const USER_API = 'users'

const signUp = async (user) => {
  await axios.post(USER_API + '/register', user)
}
const signIn = async (user) => {
  await axios.post(USER_API + '/login', user)
}

export default {
  signUp,
  signIn,
}

import axios from 'axios'
// axios.defaults.baseURL = 'https://ecommerce-backend-final-zeta.vercel.app/api/';
axios.defaults.baseURL = 'http://localhost:3001/api/'
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
export default axios

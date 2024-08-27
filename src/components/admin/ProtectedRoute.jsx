import Menu from './Menu'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedRoute = () => {
  let token = localStorage.getItem('token')
  // console.log("token est " + token)
  return token != null ? (
    <>
      <Menu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}
export default ProtectedRoute

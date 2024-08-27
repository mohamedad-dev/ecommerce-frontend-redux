import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listarticles from './components/admin/articles/Listarticles'
import Listcategories from './components/admin/categories/Listcategories'
import Listscategories from './components/admin/scategories/Listscategories'
import Menu from './components/admin/Menu'
import Listarticlescard from './components/client/Listarticlescard'
import Cart from './components/client/panier/Cart'
import NavScrolls from './components/client/NavScrolls'
import Register from './components/admin/Register'
import Login from './components/admin/Login'
import Logout from './components/admin/Logout'
import { useSelector } from 'react-redux'

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return (
    <>
      <Router>
        {isLoggedIn ? <Menu /> : <Login />}

        {/* <NavScrolls /> */}
        <Routes>
          <Route path="/" element={<Listarticlescard />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/articles" element={<Listarticles />} />
          <Route path="/categories" element={<Listcategories />} />
          <Route path="/scategories" element={<Listscategories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

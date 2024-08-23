import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listarticles from './components/admin/articles/Listarticles'
import Listcategories from './components/admin/categories/Listcategories'
import Listscategories from './components/admin/scategories/Listscategories'
import Menu from './components/admin/Menu'
import Listarticlescard from './components/client/Listarticlescard'
import Cart from './components/client/panier/Cart'
import NavScrolls from './components/client/NavScrolls'
import Register from './components/admin/Register'

function App() {
  return (
    <>
      <Router>
        {/* <Menu /> */}
        <NavScrolls />
        <Routes>
          <Route path="/" element={<Listarticlescard />} />
          <Route path="/register" element={<Register />}></Route>
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

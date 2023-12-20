import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../NavBar/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
  
<nav className="navbar navbar-expand-lg">
  <div className="container">
        <a className="navbar-brand img-fluid" href="/">
          <img src={logo} alt="Logo de la empresa" />
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/remeras">Remeras</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/buzos">Buzos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/camisas">Camisas</Link>
        </li>
      </ul>
    </div>
    
  <Link to="/cart">
    <CartWidget className="cart-icon" />
  </Link>
  </div>
</nav>
</div>
  )
}

export default NavBar
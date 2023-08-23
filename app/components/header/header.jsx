import { Link } from '@remix-run/react'
import logo from '../../../public/img/logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className="container bar">
        <Link
          to='/'
          className="logo"
        >
          <img className='logo' src={logo} alt="Imagen logo"></img>
        </Link>
        <nav className="navigation">
          <Link className='navigation__link' to='/'>Inicio</Link>
          <Link className='navigation__link' to='/about'>Nosotros</Link>
          <Link className='navigation__link' to='/shop'>Tienda</Link>
          <Link className='navigation__link' to='/blog'>Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
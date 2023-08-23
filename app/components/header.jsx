import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navigation from './navigation';

function Header() {

  return (
    <header className='header'>
      <div className="bar container">
        <Link
          to='/'
          className="logo"
        >
          <img className='logo' src={logo} alt="Imagen logo"></img>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
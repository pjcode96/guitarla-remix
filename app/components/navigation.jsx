import { Link, useLocation } from "@remix-run/react"

import cartImage from '../../public/img/carrito.png'

function Navigation() {

    const location = useLocation()

    return (
        <nav className="navigation">
            <Link className={`${location.pathname === '/' ? 'active' : ''} navigation__link`} to='/'>Inicio</Link>
            <Link className={`${location.pathname === '/about' ? 'active' : ''} navigation__link`} to='/about'>Nosotros</Link>
            <Link className={`${location.pathname === '/products' ? 'active' : ''} navigation__link`} to='/products'>Tienda</Link>
            <Link className={`${location.pathname === '/blog' ? 'active' : ''} navigation__link`} to='/blog'>Blog</Link>
            <Link className={`${location.pathname === '/cart' ? 'active' : ''} navigation__link`} to='/cart'>
                <img src={cartImage} alt='Icono carrito' />
            </Link>
        </nav>
    )
}

export default Navigation
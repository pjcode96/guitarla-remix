import {
    Meta,
    Links,
    Outlet,
    LiveReload,
    Scripts,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import normalize from '~/styles/normalize.css'
import font from '~/assets/fonts/Outfit-VariableFont_wght.ttf'
import favicon from '../public/img/logo.svg'

import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return (
        [
            { charset: 'utf-8' },
            { title: 'GuitarLA - Remix' },
            { description: 'Venta de guitarras' },
            { viewport: "width=device_width,initial-scale=1" }
        ]
    )
}

export function links() {
    return [
        {
            rel: "icon",
            type: "image/svg",
            href: favicon
        },
        {
            rel: "stylesheet",
            href: normalize
        },
        {
            rel: "stylesheet",
            href: font
        },
        {
            rel: "stylesheet",
            href: styles
        },
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <LiveReload />
                <Header />
                {children}
                <Footer />
                <Scripts />
            </body>
        </html>
    )
}

export function ErrorBoundary() {

    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className="error">
                    {error.status} {error.statusText}
                </p>

                <Link className='error__link' to='/'>Volver a página principal</Link>
            </Document>
        )
    }
}
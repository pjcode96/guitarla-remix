import {
    Meta,
    Links,
    Outlet,
    LiveReload,
    Scripts
} from '@remix-run/react'

import styles from '~/styles/index.css'
import normalize from '~/styles/normalize.css'
import font from '~/assets/fonts/Outfit-VariableFont_wght.ttf'
import favicon from '../public/img/logo.svg'
import Header from '~/components/header/header'

export function meta() {
    return (
        [
            { charset: 'utf-8' },
            { title: 'GuitarLA - Remix' },
            { viewport: 'width=device-width, initial-scale=1' },
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

                <Scripts />
            </body>
        </html>
    )
}
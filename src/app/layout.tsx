'use client'

import {ReactNode} from "react"
import './globals.css'

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className='relative' style={{ background: 'url(/pattern.svg) center center/cover repeat' }}>
                {children}
            </body>
        </html>
    )
}
import {ReactNode} from "react"
import './globals.css'
import {Metadata} from "next";
import {SITE_NAME} from "@/constants/site.constants";

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
}

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
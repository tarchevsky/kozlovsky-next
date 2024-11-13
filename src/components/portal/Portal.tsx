'use client'

import {ReactNode, useEffect, useState} from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return mounted ? createPortal(
        <div className="fixed inset-0">
            <div className="absolute inset-0">
                {children}
            </div>
        </div>,
        document.body
    ) : null
}
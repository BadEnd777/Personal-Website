import React, { ReactNode } from 'react'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Layout = ({ children, className: className }: LayoutProps) => {
    return (
        <div className="flex h-screen max-w-[100vw] flex-col overflow-x-hidden">
            <Header />
            <main className={`container mt-[80px] flex-1 ${className}`}>{children}</main>
            <Footer />
        </div>
    )
}

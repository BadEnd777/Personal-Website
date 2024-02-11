import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Typography } from '@/components/typography'
import NextLink from 'next/link'

export const Header = () => {
    return (
        <header className="sticky left-0 top-0 z-10 min-h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-full items-center justify-between">
                <NextLink href="/" aria-label="BadEnd">
                    <Typography variant="h1">BadEnd</Typography>
                </NextLink>
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}

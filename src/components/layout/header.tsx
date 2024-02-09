import { Typography } from '@/components/typography'
import { A } from '@solidjs/router'
import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'

export const Header = () => {
    return (
        <header class="fixed left-0 top-0 z-10 h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
            <div class="container flex h-full items-center justify-between">
                <A href="/">
                    <Typography variant="h2">BadEnd</Typography>
                </A>
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}

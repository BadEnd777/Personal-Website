import { Typography } from '@/components/typography'
import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { A } from '@solidjs/router'

import { parsePath } from '@/helper/parse-path'
import { useLocation } from '@solidjs/router'
import { createMemo } from 'solid-js'

export const Header = () => {
    const location = useLocation()

    const pathname = createMemo(() => parsePath(location.pathname))

    const isActive = (path: string) => {
        return pathname() === parsePath(path)
    }

    return (
        <header class="fixed left-0 top-0 z-10 h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
            <div class="container flex h-full items-center justify-between">
                <A href="/" aria-label="BadEnd">
                    <Typography variant="h2">BadEnd</Typography>
                </A>
                <DesktopNav isActive={isActive} />
                <MobileNav />
            </div>
        </header>
    )
}

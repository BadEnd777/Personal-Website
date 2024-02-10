import { ModeToggle } from '@/components/mode-toggle'
import { GitHubLogo } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { A } from '@solidjs/router'
import { For } from 'solid-js'

import { slugToTitle } from '@/helper/slug-to-title'
import { routes } from '@/routes'

export const DesktopNav = (props: { isActive: (path: string) => boolean }) => {
    return (
        <div class="hidden items-center space-x-4 md:flex">
            <nav class="flex space-x-10 font-medium">
                <For each={routes.filter((route) => route.isNav)}>
                    {(route) => (
                        <A
                            href={route.path}
                            class={`cursor-pointer ${props.isActive(route.path) ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            {route.path === '/' ? 'Home' : slugToTitle(route.path.slice(1))}
                        </A>
                    )}
                </For>
            </nav>
            <div class="h-8 w-px bg-muted" />
            <div class="flex items-center space-x-1">
                <ModeToggle />
                <A href="https://github.com/BadEnd777/Portfolio-Website" target="_blank" aria-label="GitHub repository">
                    <Button variant="ghost" size="icon" aria-label="GitHub repository">
                        <GitHubLogo />
                    </Button>
                </A>
            </div>
        </div>
    )
}

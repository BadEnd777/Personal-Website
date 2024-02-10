import { ModeToggle } from '@/components/mode-toggle'
import { HamburgerMenu } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { A } from '@solidjs/router'
import { As } from '@kobalte/core'
import { For } from 'solid-js'

import { slugToTitle } from '@/helper/slug-to-title'
import { routes } from '@/routes'

export const MobileNav = () => {
    return (
        <div class="flex items-center space-x-1 md:hidden">
            <ModeToggle />
            <DropdownMenu placement="bottom-end">
                <DropdownMenuTrigger asChild>
                    <As component={Button} variant="ghost" size="icon">
                        <HamburgerMenu />
                        <span class="sr-only">Dropdown Menu</span>
                    </As>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="min-w-[150px]">
                    <For each={routes.filter((route) => route.isNav)}>
                        {(route) => (
                            <A href={route.path}>
                                <DropdownMenuItem>
                                    {route.path === '/' ? 'Home' : slugToTitle(route.path.slice(1))}
                                </DropdownMenuItem>
                            </A>
                        )}
                    </For>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <A
                            href="https://github.com/BadEnd777/Portfolio-Website"
                            target="_blank"
                            aria-label="GitHub repository"
                        >
                            GitHub Repository
                        </A>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import NextLink from 'next/link'

import { routes } from '@/data'

export const MobileNav = () => {
    return (
        <div className="flex items-center space-x-1 md:hidden">
            <ModeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <span className="icon-[tabler--align-right] size-5" />
                        <span className="sr-only">Dropdown Menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[150px]">
                    {routes.map((route) => (
                        <NextLink key={route.path} href={route.path}>
                            <DropdownMenuItem>{route.label}</DropdownMenuItem>
                        </NextLink>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <NextLink
                            href="https://github.com/BadEnd777/Portfolio-Website"
                            target="_blank"
                            aria-label="GitHub repository"
                        >
                            View on GitHub
                        </NextLink>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

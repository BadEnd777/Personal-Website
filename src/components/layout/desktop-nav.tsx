import { For, createEffect, createSignal } from 'solid-js'
import { ModeToggle } from '@/components/mode-toggle'
import { GitHubLogo } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { A } from '@solidjs/router'

import { navLinks } from '@/data/nav-links'
import { goto } from '@/helper/goto'

export const DesktopNav = () => {
    const [currentSection, setCurrentSection] = createSignal('home')

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const sections = document.querySelectorAll('section')

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPosition + 100) {
                setCurrentSection(section.id)
            }
        })
    }

    createEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div class="hidden items-center space-x-4 md:flex">
            <nav class="flex space-x-10 font-medium">
                <For each={navLinks}>
                    {(link) => (
                        <p
                            class={`cursor-pointer ${currentSection() === link.id ? 'text-primary' : 'text-muted-foreground'}`}
                            onClick={() => goto(link.id)}
                        >
                            {link.name}
                        </p>
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

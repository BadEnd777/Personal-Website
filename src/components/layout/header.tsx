import { For, createEffect, createSignal } from 'solid-js'
import { Typography } from '@/components/typography'
import { ModeToggle } from '@/components/mode-toggle'
import { GitHubLogo } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { A } from '@solidjs/router'

import { goto } from '@/helper/goto'

const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
]

export const Header = () => {
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
        <header class="fixed left-0 top-0 z-10 h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
            <div class="container flex h-full items-center justify-between">
                <A href="/">
                    <Typography variant="h2">BadEnd</Typography>
                </A>
                <div class="flex items-center space-x-4">
                    <nav class="hidden space-x-10 font-medium md:flex">
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
                        <A href="https://github.com/BadEnd777/Portfolio-Website" target="_blank">
                            <Button variant="ghost" size="icon">
                                <GitHubLogo />
                            </Button>
                        </A>
                    </div>
                </div>
            </div>
        </header>
    )
}

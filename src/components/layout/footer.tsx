import { For } from 'solid-js'
import { A } from '@solidjs/router'
import { contact } from '@/data'

export const Footer = () => {
    return (
        <footer class="w-full border-t bg-background">
            <div class="container flex h-full flex-col items-center justify-between space-y-2 py-4 md:flex-row md:space-y-0">
                <div class="flex flex-col items-center space-y-2 md:items-start">
                    <p>&copy; {new Date().getFullYear()} BadEnd, All Rights Reserved</p>
                    <p>
                        This website is open source.{' '}
                        <A
                            href="https://github.com/BadEnd777/Portfolio-Website"
                            target="_blank"
                            class="link"
                            aria-label="GitHub repository"
                        >
                            View on GitHub
                        </A>
                    </p>
                </div>
                <div class="flex space-x-4">
                    <For each={contact}>
                        {(item) => (
                            // Use a normal anchor tag because there is a problem when the link is mailto:
                            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                                <span class={`${item.icon} size-6`} />
                            </a>
                        )}
                    </For>
                </div>
            </div>
        </footer>
    )
}

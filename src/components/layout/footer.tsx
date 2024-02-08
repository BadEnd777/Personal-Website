import { For } from 'solid-js'
import { A } from '@solidjs/router'
import { contact } from '@/data'

export const Footer = () => {
    return (
        <footer class="h-[80px] w-full border-t bg-background">
            <div class="container flex h-full items-center justify-between py-2">
                <div class="flex flex-col space-y-2">
                    <p>&copy; {new Date().getFullYear()} BadEnd, All Rights Reserved</p>
                    <p>
                        This website is open source.{' '}
                        <A href="https://github.com/BadEnd777/Portfolio-Website" target="_blank" class="link">
                            View on GitHub
                        </A>
                    </p>
                </div>
                <div class="flex space-x-4">
                    <For each={contact}>
                        {(item) => (
                            // Use a normal anchor tag because there is a problem when the link is mailto:
                            <a href={item.link} target="_blank">
                                {<item.icon class="size-6" />}
                            </a>
                        )}
                    </For>
                </div>
            </div>
        </footer>
    )
}

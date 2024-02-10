import { Typography } from '@/components/typography'
import { For } from 'solid-js'

import { contact } from '@/data'

export const Contact = () => {
    return (
        <section class="flex flex-col space-y-8 pb-20 pt-4">
            <Typography variant="h2" underline>
                📫 Let's Connect
            </Typography>
            <div class="flex flex-col space-y-12">
                <p class="text-center text-xl text-muted-foreground lg:text-left">
                    Feel free to contact me if you have any questions or just want to say hi!
                </p>
                <div class="flex flex-col items-center space-y-4">
                    <img
                        src="/images/profile.webp"
                        alt="Profile"
                        class="lazyload size-[300px] rounded-full md:size-[400px]"
                    />
                    <Typography variant="h1">Contact Information</Typography>
                    <div class="flex space-x-4">
                        <For each={contact}>
                            {(item) => (
                                // Use a normal anchor tag because there is a problem when the link is mailto:
                                <a
                                    href={item.link}
                                    class="group flex items-center space-x-2 text-lg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                >
                                    <span class={`${item.icon} size-6`} />
                                    <p class="transition-colors group-hover:underline">{item.label}</p>
                                </a>
                            )}
                        </For>
                    </div>
                    <p class="text-lg text-primary">I look forward to hearing from you!</p>
                </div>
            </div>
        </section>
    )
}

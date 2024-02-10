import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { For } from 'solid-js'
import Autoplay from 'embla-carousel-autoplay'

const skills = [
    {
        title: 'Web Development',
        description: 'I have experience building web applications using modern technologies and frameworks.',
        items: [
            { name: 'Next.js', icon: 'nextdotjs' },
            { name: 'React', icon: 'react' },
            { name: 'Svelte', icon: 'svelte' },
            { name: 'Vue.js', icon: 'vuedotjs' },
            { name: 'Nuxt.js', icon: 'nuxtdotjs' },
            { name: 'Chakra UI', icon: 'chakraui' },
            { name: 'Tailwind CSS', icon: 'tailwindcss' },
        ],
    },
    {
        title: 'UI/UX Design for Web & Apps',
        description: 'I have experience creating UI/UX designs for web and mobile applications.',
        items: [{ name: 'Figma', icon: 'figma' }],
    },
    {
        title: 'Backend Development',
        description: 'I have experience building and maintaining backend services and APIs.',
        items: [
            { name: 'Fastify', icon: 'fastify' },
            { name: 'Express', icon: 'express' },
            { name: 'Go Fiber', icon: 'go' },
            { name: 'ASP.NET', icon: 'csharp' },
        ],
    },
    {
        title: 'Chatbot Development',
        description: 'I have experience building chatbots for various platforms.',
        items: [
            { name: 'Discord', icon: 'discord' },
            { name: 'LINE', icon: 'line' },
            { name: 'Telegram', icon: 'telegram' },
            { name: 'Facebook Messenger', icon: 'facebook' },
        ],
    },
    {
        title: 'Web Scraping',
        description: 'I have experience scraping data from various websites.',
        items: [
            { name: 'Puppeteer', icon: 'puppeteer' },
            { name: 'Cheerio', icon: 'nodedotjs' },
            { name: 'Beautiful Soup', icon: 'python' },
        ],
    },
]

export const SkillList = () => {
    return (
        <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent class="-ml-1">
                <For each={skills}>
                    {(skill) => (
                        <CarouselItem class="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div class="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{skill.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{skill.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <div class="flex flex-wrap gap-2">
                                            <For each={skill.items}>
                                                {(item) => (
                                                    <img
                                                        src={`https://simpleicons.org/icons/${item.icon}.svg`}
                                                        alt={item.name}
                                                        title={item.name}
                                                        class="h-6 w-6"
                                                    />
                                                )}
                                            </For>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                </For>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

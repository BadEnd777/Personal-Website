import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/typography'
import { For } from 'solid-js'
import Autoplay from 'embla-carousel-autoplay'

import { education, experience, biography, skills } from '@/data'

export const About = () => {
    return (
        <section class="flex flex-col space-y-8 py-4">
            <Typography variant="h1" underline>
                📝 About Me
            </Typography>
            <div class="flex flex-col space-y-6">
                <Typography variant="h2">Summary</Typography>
                <p class="text-lg text-muted-foreground">
                    Enthusiastic and results-driven freelance developer with a solid background in web development.
                    Passionate about crafting responsive and efficient web solutions, dedicated to delivering
                    high-quality work. Seeking opportunities to leverage my skills and expertise in innovative projects.
                </p>
            </div>
            <div class="flex flex-col space-y-6">
                <Typography variant="h2">Education</Typography>
                <div class="flex flex-col gap-3">
                    <For each={education}>
                        {(item) => (
                            <div class="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                                <Typography variant="h3">{item.title}</Typography>
                                <p class="text-md text-muted-foreground">{item.subtitle}</p>
                                <p class="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        )}
                    </For>
                </div>
            </div>
            <div class="flex flex-col space-y-6">
                <Typography variant="h2">Work Experience</Typography>
                <div class="flex flex-col gap-3">
                    <For each={experience}>
                        {(item) => (
                            <div class="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                                <Typography variant="h3">{item.title}</Typography>
                                <p class="text-md text-muted-foreground">{item.subtitle}</p>
                                <p class="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        )}
                    </For>
                </div>
            </div>
            <div class="flex flex-col space-y-6">
                <Typography variant="h2">Biography</Typography>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <For each={biography}>
                        {(item) => (
                            <Card class="w-full">
                                <CardHeader>
                                    <CardTitle>{item.year}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )}
                    </For>
                </div>
            </div>
            <div class="flex flex-col space-y-6">
                <Typography variant="h2">My Skills</Typography>
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
            </div>
        </section>
    )
}

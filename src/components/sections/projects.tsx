import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Typography } from '@/components/typography'
import { A } from '@solidjs/router'
import { For } from 'solid-js'

import { projects } from '@/data'

export const Projects = (props: { featured?: boolean }) => {
    return (
        <section class="flex flex-col space-y-8 py-4">
            <div class="flex items-center justify-between border-b pb-4">
                <Typography variant="h2">🚀 {props.featured && 'Featured '}Projects</Typography>
                <Tooltip placement="top-end">
                    <TooltipTrigger>
                        <A
                            href="https://github.com/BadEnd777"
                            class="flex items-center space-x-2 text-muted-foreground"
                            target="_blank"
                            aria-label="View on GitHub"
                        >
                            <p class="hidden text-lg md:block">View on GitHub</p>
                            <span class="icon-[tabler--arrow-right] size-6" />
                        </A>
                    </TooltipTrigger>
                    <TooltipContent>View on GitHub</TooltipContent>
                </Tooltip>
            </div>
            <p class="text-lg text-muted-foreground">
                Here are some of the projects I've worked on. You can find more on my GitHub profile.
            </p>
            <div class="flex h-full w-full flex-wrap justify-between gap-4">
                <For each={projects.filter((project) => (props.featured ? project.isFeatured : true))}>
                    {(project) => (
                        <Card class={project.isFullWidth ? 'w-full' : 'md:basis-[calc(50%-0.5rem)]'}>
                            <div class={`flex h-full flex-col justify-between ${project.isFullWidth && 'md:flex-row'}`}>
                                <div class={project.isFullWidth && 'basis-1/2'}>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        {project.status.link ? (
                                            <A
                                                href={project.status.link}
                                                target="_blank"
                                                class="flex items-center space-x-2"
                                            >
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span class={project.status.icon} />}
                                            </A>
                                        ) : (
                                            <>
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span class={project.status.icon} />}
                                            </>
                                        )}
                                    </CardFooter>
                                </div>
                                <div class={`px-6 ${project.isFullWidth ? 'basis-1/2 py-6 md:pr-6' : 'pb-6'}`}>
                                    <img src={project.image} alt={project.title} class="rounded object-contain" />
                                </div>
                            </div>
                        </Card>
                    )}
                </For>
            </div>
        </section>
    )
}

import { Typography } from '@/components/typography'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { projects } from '@/data'
import Image from 'next/image'
import NextLink from 'next/link'

export interface ProjectsSectionProps {
    featured?: boolean
}

export const Projects = ({ featured }: ProjectsSectionProps) => {
    return (
        <section className="flex flex-col space-y-8 py-4">
            <div className="flex items-center justify-between border-b pb-4">
                <Typography variant="h1">🚀 {featured && 'Featured '}Projects</Typography>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>View on GitHub</TooltipTrigger>
                        <TooltipContent aria-label="View on GitHub">
                            <NextLink
                                href="https://github.com/BadEnd777"
                                className="flex items-center space-x-2"
                                target="_blank"
                                aria-label="View on GitHub"
                            >
                                <p className="hidden text-sm md:block">View on GitHub</p>
                                <span className="icon-[tabler--arrow-right] size-6" />
                            </NextLink>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <h2 className="text-lg text-muted-foreground">
                Here are some of the projects I&apos;ve worked on. You can find more on my GitHub profile.
            </h2>
            <div className="flex h-full w-full flex-wrap justify-between gap-4">
                {projects
                    .filter((project) => (featured ? project.isFeatured : true))
                    .map((project) => (
                        <Card
                            key={project.title}
                            className={project.isFullWidth ? 'w-full' : 'md:basis-[calc(50%-0.5rem)]'}
                        >
                            <div
                                className={`flex h-full flex-col justify-between ${project.isFullWidth && 'md:flex-row'}`}
                            >
                                <div className={project.isFullWidth ? 'basis-1/2' : ''}>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle>{project.title}</CardTitle>
                                        {project.note && (
                                            <Badge variant="secondary" className="rounded-full">
                                                {project.note}
                                            </Badge>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        {project.status.link ? (
                                            <NextLink
                                                href={project.status.link}
                                                target="_blank"
                                                className="flex items-center space-x-2 hover:underline"
                                            >
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span className={project.status.icon} />}
                                            </NextLink>
                                        ) : (
                                            <>
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span className={project.status.icon} />}
                                            </>
                                        )}
                                    </CardFooter>
                                </div>
                                <div className={`px-6 ${project.isFullWidth ? 'basis-1/2 py-6 md:pr-6' : 'pb-6'}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={500}
                                        className="rounded object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
            </div>
        </section>
    )
}

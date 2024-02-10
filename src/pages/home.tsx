import type { Component } from 'solid-js'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout'
import { A } from '@solidjs/router'
import { For } from 'solid-js'
import { SkillList } from '@/components/skill-list'

import { education, experience, biography, projects, contact } from '@/data'

const Home: Component = () => {
    return (
        <Layout class="space-y-10">
            <section id="home" class="flex flex-col-reverse items-center justify-between space-x-6 py-12 lg:flex-row">
                <div class="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
                    <div class="flex items-baseline space-x-1 space-y-6 lg:flex-col lg:space-x-0">
                        <Typography variant="h1">👋</Typography>
                        <Typography variant="h1">Hello, I am BadEnd</Typography>
                    </div>
                    <p class="text-xl text-muted-foreground">
                        I'm a passionate Full Stack Developer who enjoys transforming lines of code into meaningful
                        solutions. Continuously exploring the realms of technology to craft innovative and impactful
                        projects.
                    </p>
                    <div class="flex space-x-4">
                        <A href="/projects">
                            <Button aria-label="View Projects">View Projects</Button>
                        </A>
                        <A href="/contact">
                            <Button aria-label="Contact Me" variant="outline">
                                Contact Me
                            </Button>
                        </A>
                    </div>
                </div>
                <img
                    src="/images/profile.webp"
                    alt="Profile"
                    class="lazyload size-[300px] rounded-xl md:size-[450px] lg:size-[500px]"
                />
            </section>
            <section id="about" class="flex flex-col space-y-8 py-4">
                <Typography variant="h2" underline>
                    📝 About Me
                </Typography>
                <div class="flex flex-col space-y-6">
                    <Typography variant="h3">Summary</Typography>
                    <p class="text-lg text-muted-foreground">
                        Enthusiastic and results-driven freelance developer with a solid background in web development.
                        Passionate about crafting responsive and efficient web solutions, dedicated to delivering
                        high-quality work. Seeking opportunities to leverage my skills and expertise in innovative
                        projects.
                    </p>
                </div>
                <div class="flex flex-col space-y-6">
                    <Typography variant="h3">Education</Typography>
                    <For each={education}>
                        {(item) => (
                            <div class="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                                <Typography variant="h5">{item.title}</Typography>
                                <p class="text-lg text-muted-foreground">{item.subtitle}</p>
                                <p class="text-lg text-muted-foreground">{item.description}</p>
                            </div>
                        )}
                    </For>
                </div>
                <div class="flex flex-col space-y-6">
                    <Typography variant="h3">Work Experience</Typography>
                    <For each={experience}>
                        {(item) => (
                            <div class="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                                <Typography variant="h5">{item.title}</Typography>
                                <p class="text-lg text-muted-foreground">{item.subtitle}</p>
                                <p class="text-lg text-muted-foreground">{item.description}</p>
                            </div>
                        )}
                    </For>
                </div>
                <div class="flex flex-col space-y-6">
                    <Typography variant="h3">Biography</Typography>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <For each={biography}>
                            {(item) => (
                                <div class="flex flex-col space-y-2 rounded border p-4">
                                    <Typography variant="h5">{item.year}</Typography>
                                    <p class="text-lg text-muted-foreground">{item.description}</p>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <div class="flex flex-col space-y-6">
                    <Typography variant="h3">My Skills</Typography>
                    <SkillList />
                </div>
            </section>
            <section id="projects" class="flex flex-col space-y-8 py-4">
                <div class="flex items-center justify-between border-b pb-4">
                    <Typography variant="h2">🚀 Featured Projects</Typography>
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
                <div class="flex h-full w-full flex-wrap justify-between gap-6">
                    <For each={projects}>
                        {(project) => (
                            <div
                                class={`flex justify-between gap-6 rounded-xl border p-4 ${
                                    project.isFullWidth
                                        ? 'w-full flex-col md:flex-row'
                                        : 'w-full flex-col md:w-[calc(50%-12px)]'
                                }`}
                            >
                                <div
                                    class={`flex flex-col space-y-4 ${project.isFullWidth ? 'w-full md:w-1/2' : 'w-full'}`}
                                >
                                    <Typography variant="h3">{project.title}</Typography>
                                    <p class="whitespace-pre-line">{project.description}</p>
                                    <A
                                        href={project.status.link}
                                        class="flex items-center space-x-2 text-sm font-bold"
                                        target="_blank"
                                        aria-label={project.status.text}
                                    >
                                        <p>{project.status.text}</p>
                                        <span class={`${project.status.icon} size-4`} />
                                    </A>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    class={`lazyload rounded object-contain ${project.isFullWidth ? 'w-full md:w-1/2' : 'w-full'}`}
                                />
                            </div>
                        )}
                    </For>
                </div>
            </section>
            <section id="contact" class="flex flex-col space-y-8 pb-20 pt-4">
                <Typography variant="h2" underline>
                    📫 Let's Connect
                </Typography>
                <div class="flex flex-col space-y-12">
                    <p class="text-xl text-muted-foreground">
                        I'm always open to new opportunities and meeting new people. Whether you have a question or just
                        want to say hi, I'll do my best to get back to you!
                    </p>
                    <div class="flex flex-col items-center space-y-4">
                        <img
                            src="/images/profile.webp"
                            alt="Profile"
                            class="lazyload size-[300px] rounded-full md:size-[400px]"
                        />
                        <Typography variant="h3">Contact Information</Typography>
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
                                        <p class="transition-colors group-hover:text-primary">{item.label}</p>
                                    </a>
                                )}
                            </For>
                        </div>
                        <p class="text-lg text-primary">I look forward to hearing from you!</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home

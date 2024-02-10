import type { Component } from 'solid-js'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout'
import { A } from '@solidjs/router'

import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'

const HomePage: Component = () => {
    return (
        <Layout class="space-y-10">
            <section class="flex flex-col-reverse items-center justify-between space-x-6 py-12 lg:flex-row">
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
            <About />
            <Projects featured />
            <Contact />
        </Layout>
    )
}

export default HomePage

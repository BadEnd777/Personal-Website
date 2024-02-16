import { Layout } from '@/components/layout'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Projects } from '@/components/sections/projects'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import Image from 'next/image'
import NextLink from 'next/link'

const words = [
    {
        text: 'Hello,',
    },
    {
        text: 'I am',
    },
    {
        text: 'BadEnd',
        className: 'text-primary',
    },
]

const HomePage = () => {
    return (
        <Layout>
            <section className="flex flex-col-reverse items-center justify-between space-x-6 py-12 lg:flex-row">
                <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
                    <div className="flex items-baseline space-x-1 space-y-6 lg:flex-col lg:space-x-0">
                        <Typography variant="h1">👋</Typography>
                        <TypewriterEffect
                            className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold leading-none tracking-tight"
                            words={words}
                        />
                    </div>
                    <TextGenerateEffect
                        words="I'm a passionate Full Stack Developer who enjoys transforming lines of code into meaningful solutions. Continuously exploring the realms of technology to craft innovative and impactful projects."
                        className="text-xl text-muted-foreground"
                    />
                    <div className="flex space-x-4">
                        <NextLink href="/projects">
                            <Button className="text-primary-foreground" aria-label="View Projects">
                                View Projects
                            </Button>
                        </NextLink>
                        <NextLink href="/contact">
                            <Button variant="outline" className="gap-2" aria-label="Contact Me">
                                Contact Me
                                <span className="icon-[tabler--mail-fast] size-6" />
                            </Button>
                        </NextLink>
                    </div>
                </div>
                <Image
                    src="/images/profile.webp"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="size-[300px] rounded-xl md:size-[450px] lg:size-[500px]"
                    priority
                />
            </section>
            <About />
            <Projects featured />
            <Contact />
        </Layout>
    )
}

export default HomePage

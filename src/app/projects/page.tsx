import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Explore a collection of innovative projects by BadEnd. Discover our creative endeavors, ranging from web development to design and technology.',
}

const ProjectsPage = () => {
    return (
        <Layout>
            <Projects />
        </Layout>
    )
}

export default ProjectsPage

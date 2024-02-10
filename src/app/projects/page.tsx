import type { Metadata } from 'next'

import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Explore a collection of innovative projects by BadEnd. Discover our creative endeavors, ranging from web development to design and technology.',
}

const ProjectsPage = () => {
    return (
        <Layout className="py-4">
            <Projects />
        </Layout>
    )
}

export default ProjectsPage

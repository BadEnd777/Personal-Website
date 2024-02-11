import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import type { Metadata } from 'next'

const title = 'Projects'
const description =
    'Explore a collection of innovative projects by BadEnd. Discover our creative endeavors, ranging from web development to design and technology.'
const image = 'https://badend.is-a.dev/images/open-graph.webp'

export const metadata: Metadata = {
    title: {
        template: `${title} - %s`,
        default: `${title} - Personal Website`,
    },
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: image,
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [image],
    },
}

const ProjectsPage = () => {
    return (
        <Layout>
            <Projects />
        </Layout>
    )
}

export default ProjectsPage

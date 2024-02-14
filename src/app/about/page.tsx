import { Layout } from '@/components/layout'
import { About } from '@/components/sections/about'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'About Me'
const description =
    'Learn more about BadEnd, a web developer and designer. Discover my journey, skills, and experience in the world of technology.'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: OPEN_GRAPH_IMAGE,
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [OPEN_GRAPH_IMAGE],
    },
}

const AboutPage = () => {
    return (
        <Layout>
            <About />
        </Layout>
    )
}

export default AboutPage

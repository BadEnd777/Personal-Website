import { Layout } from '@/components/layout'
import { About } from '@/components/sections/about'
import type { Metadata } from 'next'

const title = 'About Me'
const description =
    'Learn more about BadEnd, a web developer and designer. Discover my journey, skills, and experience in the world of technology.'
const image = 'https://badend.is-a.dev/images/open-graph.webp'

export const metadata: Metadata = {
    title,
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

const AboutPage = () => {
    return (
        <Layout>
            <About />
        </Layout>
    )
}

export default AboutPage

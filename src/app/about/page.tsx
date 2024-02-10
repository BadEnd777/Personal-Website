import type { Metadata } from 'next'

import { Layout } from '@/components/layout'
import { About } from '@/components/sections/about'

export const metadata: Metadata = {
    title: 'About Me',
    description:
        'Learn more about BadEnd, a web developer and designer. Discover my journey, skills, and experience in the world of technology.',
}

const AboutPage = () => {
    return (
        <Layout className="py-4">
            <About />
        </Layout>
    )
}

export default AboutPage

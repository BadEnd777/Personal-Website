import { Layout } from '@/components/layout'
import { Contact } from '@/components/sections/contact'
import type { Metadata } from 'next'

const title = "Let's Connect"
const description =
    'Get in touch with BadEnd, a passionate Full Stack Developer. Reach out to discuss projects, collaborations, or anything else.'
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

const ContactPage = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactPage

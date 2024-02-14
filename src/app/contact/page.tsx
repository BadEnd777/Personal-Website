import { Layout } from '@/components/layout'
import { Contact } from '@/components/sections/contact'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = "Let's Connect"
const description =
    'Get in touch with BadEnd, a passionate Full Stack Developer. Reach out to discuss projects, collaborations, or anything else.'

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

const ContactPage = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactPage

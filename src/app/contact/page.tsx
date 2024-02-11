import { Layout } from '@/components/layout'
import { Contact } from '@/components/sections/contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Let's Connect",
    description:
        'Get in touch with BadEnd, a passionate Full Stack Developer. Reach out to discuss projects, collaborations, or anything else.',
}

const ContactPage = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactPage

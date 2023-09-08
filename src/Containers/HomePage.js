// Import necessary components
import { Layout } from '@/containers/layout'
import { Hero } from '@/containers/sections/homepage/Hero'
import { Skills } from '@/containers/sections/homepage/Skills'
import { Resume } from '@/containers/sections/homepage/Resume'
import { Contact } from '@/containers/sections/homepage/Contact'

// Define the HomePage component
export const HomePage = () => (
    // Wrap the sections in the common layout
    <Layout mt="0">
        <Hero /> {/* Render the Hero section */}
        <Skills /> {/* Render the Skills section */}
        <Resume /> {/* Render the Resume section */}
        <Contact /> {/* Render the Contact section */}
    </Layout>
)

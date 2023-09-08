// Import necessary components
import { Layout } from '@/Containers/Layout'
import { Hero } from '@/Containers/Sections/HomePage/Hero'
import { Skills } from '@/Containers/Sections/HomePage/Skills'
import { Resume } from '@/Containers/Sections/HomePage/Resume'
import { Contact } from '@/Containers/Sections/HomePage/Contact'

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

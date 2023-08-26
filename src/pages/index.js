// Import necessary components
import { Layout } from '@/Layout'
import { Hero } from '@/Components/Sections/Home/Hero'
import { Skills } from '@/Components/Sections/Home/Skills'
import { Resume } from '@/Components/Sections/Home/Resume'
import { Contact } from '@/Components/Sections/Home/Contact'

// Define the HomePages component
const HomePages = () => {
    return (
        // Wrap the sections in the common layout
        <Layout>
            <Hero /> {/* Render the Hero section */}
            <Skills /> {/* Render the Skills section */}
            <Resume /> {/* Render the Resume section */}
            <Contact /> {/* Render the Contact section */}
        </Layout>
    )
}

// Export the component as the default export
export default HomePages

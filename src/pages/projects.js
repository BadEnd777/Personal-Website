// Import necessary components and data
import { ProjectList } from '@/Components/ProjectList'
import { Layout } from '@/Layout'
import { projects } from '@/data'

// Define the Projects component
const Projects = () => {
    return (
        // Wrap the project list in the common layout
        <Layout
            title="BadEnd - Projects"
            description="Explore a collection of innovative projects by BadEnd. Discover our creative endeavors, ranging from web development to design and technology. Get inspired by our diverse portfolio and the technologies we employ."
            url="projects"
        >
            <ProjectList projects={projects} /> {/* Render the ProjectList component */}
        </Layout>
    )
}

// Export the component as the default export
export default Projects

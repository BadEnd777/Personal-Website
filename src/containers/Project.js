// Import necessary components and data
import { ProjectList } from '@/components/project/ProjectList'
import { Layout } from '@/containers/layout'
import { VStack } from '@chakra-ui/react'
import { Projects } from '@/data'

// Define the Project component
export const Project = () => (
    // Wrap the project list in the common layout
    <Layout
        title="BadEnd - Projects"
        description="Explore a collection of innovative projects by BadEnd. Discover our creative endeavors, ranging from web development to design and technology. Get inspired by our diverse portfolio and the technologies we employ."
        url="projects"
    >
        <VStack as="section" spacing="8" align="flex-start">
            {/* Render the list of projects */}
            <ProjectList title="Projects" projects={Projects} />
        </VStack>
    </Layout>
)

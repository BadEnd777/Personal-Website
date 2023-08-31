// Importing necessary components
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { ProjectCard } from '@/Components/Project/ProjectCard'

// Defining the ProjectList component
export const ProjectList = ({ projects }) => (
    // Outer container for the project list
    <VStack spacing="8" align="flex-start">
        {/* Projects section heading */}
        <HeadingUnderline>Projects</HeadingUnderline>
        {/* Grid layout for projects */}
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}
            gap="4"
        >
            {/* Mapping through project data */}
            {projects.map((project, i) => (
                <GridItem role="group" key={i}>
                    {/* Displaying the ProjectCard component for each project */}
                    <ProjectCard project={project} />
                </GridItem>
            ))}
        </Grid>
    </VStack>
)

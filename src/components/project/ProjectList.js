// Importing necessary components
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/components/HeadingUnderline'
import { ProjectCard } from '@/components/project/ProjectCard'

// Defining the ProjectList component
export const ProjectList = ({ title, projects }) => (
    // Outer container for the project list
    <VStack as="section" spacing="8" align="flex-start">
        {/* Projects section heading */}
        <HeadingUnderline as="header">{title}</HeadingUnderline>
        {/* Grid layout for projects */}
        <Grid
            as="article"
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}
            gap="4"
        >
            {/* Mapping through project data */}
            {projects.map((project, i) => (
                <GridItem as="section" role="group" key={i}>
                    {/* Displaying the ProjectCard component for each project */}
                    <ProjectCard project={project} />
                </GridItem>
            ))}
        </Grid>
    </VStack>
)

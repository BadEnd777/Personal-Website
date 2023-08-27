// Importing necessary components
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { ProjectCard } from '@/Components/Project/ProjectCard'
import { MotionFlex } from '@/Components/Motion/MotionFlex'
import { fadeInUp } from '@/styles/animations'

// Defining the ProjectList component
export const ProjectList = ({ projects }) => {
    return (
        // Outer container for the project list
        <MotionFlex {...fadeInUp({ initial: 20 })}>
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
                    gap="8"
                >
                    {/* Mapping through project data */}
                    {projects.map((project, i) => (
                        <MotionFlex
                            key={project.name}
                            {...fadeInUp({ initial: 20, delay: i * 0.1 })}
                        >
                            <GridItem colSpan="1" role="group">
                                {/* Displaying the ProjectCard component for each project */}
                                <ProjectCard project={project} />
                            </GridItem>
                        </MotionFlex>
                    ))}
                </Grid>
            </VStack>
        </MotionFlex>
    )
}

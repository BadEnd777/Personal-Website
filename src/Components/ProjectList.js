// Importing necessary components
import { VStack, HStack, Grid, GridItem, Heading, Text, Link, Badge } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import Image from 'next/image'

// Defining the ProjectList component
export const ProjectList = ({ projects }) => {
    return (
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
                {projects.map(project => (
                    <GridItem key={project.name} colSpan="1" role="group">
                        {/* Link to the project */}
                        <Link href={project.link} isExternal _hover={{ textDecoration: 'none' }}>
                            {/* Project card */}
                            <VStack
                                spacing="4"
                                align="flex-start"
                                bg="surface0"
                                borderWidth="1px"
                                borderColor="surface1"
                                borderRadius="md"
                                transition="all 0.2s ease-in-out"
                                p="4"
                                _hover={{ borderColor: 'mocha.blue' }}
                            >
                                {/* Project image */}
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={500}
                                    height={500}
                                    priority
                                    style={{
                                        borderRadius: 'var(--chakra-radii-md)'
                                    }}
                                />
                                {/* Project name */}
                                <Heading size="md" fontWeight="bold" noOfLines="1">
                                    {project.name}
                                </Heading>
                                {/* Project description */}
                                <Text fontSize="sm" color="subtext0" noOfLines="3">
                                    {project.description}
                                </Text>
                                {/* Project technologies */}
                                <HStack spacing="2" wrap="wrap">
                                    {project.techs.map(tech => (
                                        <Badge key={tech} colorScheme="blue">
                                            {tech}
                                        </Badge>
                                    ))}
                                </HStack>
                            </VStack>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    )
}

import { VStack, HStack, Grid, GridItem, Heading, Text, Link, Badge } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Layout } from '@/Layout'
import { projects } from '@/data'
import Image from 'next/image'

const Projects = () => {
    return (
        <Layout
            title="BadEnd - Projects"
            description="A list of projects I've worked on."
            url="projects"
        >
            <HeadingUnderline>Projects</HeadingUnderline>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }}
                gap="8"
                mt="8"
            >
                {projects.map(project => (
                    <GridItem key={project.name} colSpan="1" role="group">
                        <Link href={project.link} isExternal _hover={{ textDecoration: 'none' }}>
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
                                <Heading size="md" fontWeight="bold" noOfLines="1">
                                    {project.name}
                                </Heading>
                                <Text fontSize="sm" color="subtext0" noOfLines="3">
                                    {project.description}
                                </Text>
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
        </Layout>
    )
}

export default Projects

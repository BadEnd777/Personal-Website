import { VStack, HStack, Grid, GridItem, Heading, Text, Image, Link, Badge } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Layout } from '@/Layout'
import { projects } from '@/data'

const Projects = () => {
    return (
        <Layout>
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
                    <GridItem
                        key={project.name}
                        colSpan="1"
                        transition="all 0.2s ease-in-out"
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        <Link href={project.link} isExternal _hover={{ textDecor: 'none' }}>
                            <VStack
                                spacing="4"
                                align="flex-start"
                                bg="surface0"
                                borderRadius="md"
                                p="4"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    w="100%"
                                    h="300px"
                                    objectFit="cover"
                                    objectPosition="top"
                                    borderRadius="md"
                                />
                                <Heading size="md" fontWeight="bold">
                                    {project.name}
                                </Heading>
                                <Text fontSize="sm" noOfLines="3" color="subtext0">
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

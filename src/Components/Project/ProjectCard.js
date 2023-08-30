// Importing necessary components
import { Box, VStack, HStack, Heading, Text, Link, Tag, Tooltip } from '@chakra-ui/react'
import { Image } from '@/Components/Image'

// Defining the ProjectList component
export const ProjectCard = ({ project }) => (
    <Tooltip label={project.name} aria-label={project.name} placement="top-end">
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
                <Box w="full" h="full" pos="relative">
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                    <Box
                        pos="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        bgGradient="linear(to-b, transparent, surface0)"
                        opacity="0"
                        transition="all 0.2s ease-in-out"
                        _groupHover={{ opacity: '1' }}
                    >
                        <Heading
                            pos="absolute"
                            bottom="4"
                            left="50%"
                            transform="translateX(-50%)"
                            color="text"
                            fontWeight="bold"
                            fontSize="xl"
                        >
                            View Project
                        </Heading>
                    </Box>
                </Box>
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
                        <Tag key={tech}>{tech}</Tag>
                    ))}
                </HStack>
            </VStack>
        </Link>
    </Tooltip>
)

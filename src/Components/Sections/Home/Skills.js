// Importing necessary components and data
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Shield } from '@/Components/Shield'
import { technologies } from '@/data'

// Defining the Skills component
export const Skills = () => (
    <Flex
        as="section"
        direction="column"
        id="skills"
        borderTop="1px"
        borderColor="surface0"
        py="16"
    >
        <VStack spacing="2" align="flex-start" w="full">
            {/* Skills section heading */}
            <HeadingUnderline>My Skills</HeadingUnderline>
            {/* Description */}
            <Text fontSize="md" color="mocha.blue">
                List of technologies I have worked with:
            </Text>
        </VStack>
        <VStack spacing="4" align="flex-start" mt="4">
            {/* Mapping through technologies data */}
            {Object.entries(technologies).map(([category, techs]) => (
                <VStack key={category} align="flex-start">
                    {/* Category heading */}
                    <Heading as="h4" size="md">
                        {category}:
                    </Heading>
                    {/* Displaying technologies within the category */}
                    <Flex direction="row" wrap="wrap" gridGap="2">
                        {techs.map((tech, i) => (
                            <Shield key={i} name={tech.name} logo={tech.logo} color={tech.color} />
                        ))}
                    </Flex>
                </VStack>
            ))}
        </VStack>
    </Flex>
)

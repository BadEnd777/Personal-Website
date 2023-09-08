// Importing necessary components and data
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Shield } from '@/Components/Shield'
import { Technologies } from '@/Data'

// Defining the Skills component
export const Skills = () => (
    <Flex as="section" direction="column" borderTop="1px" borderColor="surface0" py="16">
        <VStack as="article" spacing="4" align="stretch">
            <VStack as="header" spacing="2" align="stretch">
                {/* Skills section heading */}
                <HeadingUnderline>My Skills</HeadingUnderline>
                {/* Description */}
                <Text fontSize="md" color="mocha.blue">
                    List of technologies I have worked with:
                </Text>
            </VStack>
            <VStack spacing="4" align="stretch">
                {/* Mapping through technologies data */}
                {Object.entries(Technologies).map(([category, techs]) => (
                    <VStack key={category} align="stretch">
                        {/* Category heading */}
                        <Heading as="h4" size="md">
                            {category}:
                        </Heading>
                        {/* Displaying technologies within the category */}
                        <Flex direction="row" wrap="wrap" gap="1">
                            {techs.map((tech, i) => (
                                <Shield
                                    key={i}
                                    name={tech.name}
                                    logo={tech.logo}
                                    color={tech.color}
                                />
                            ))}
                        </Flex>
                    </VStack>
                ))}
            </VStack>
        </VStack>
    </Flex>
)

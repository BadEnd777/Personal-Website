// Importing necessary components and data
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import { MotionFlex } from '@/Components/Motion'
import { Shield } from '@/Components/Shield'
import { technologies } from '@/data'
import { fadeInUp, fadeInLeft } from '@/styles/animations'

// Defining the Skills component
export const Skills = () => {
    return (
        <MotionFlex
            as="section"
            direction="column"
            id="skills"
            borderTop="1px"
            borderColor="surface0"
            py="16"
            px="4"
            {...fadeInUp({ initial: 20 })}
        >
            <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                <VStack spacing="2" align="flex-start">
                    {/* Skills section heading */}
                    <Heading
                        as="h2"
                        size="xl"
                        borderBottom="4px"
                        borderColor="mocha.blue"
                        w="fit-content"
                    >
                        My Skills
                    </Heading>
                    {/* Description */}
                    <Text fontSize="md" color="mocha.blue">
                        Here are some of the technologies I&apos;ve worked with:
                    </Text>
                </VStack>
            </MotionFlex>
            <VStack spacing="4" align="flex-start" mt="4">
                {/* Mapping through technologies data */}
                {Object.entries(technologies).map(([category, techs], i) => (
                    <MotionFlex key={category} {...fadeInUp({ initial: 20, delay: i * 0.1 })}>
                        <VStack spacing="2" align="flex-start">
                            {/* Category heading */}
                            <Heading as="h4" size="md">
                                {category}:
                            </Heading>
                            {/* Displaying technologies within the category */}
                            <Flex direction="row" wrap="wrap" gridGap="2">
                                {techs.map((tech, i) => (
                                    <MotionFlex
                                        key={i}
                                        {...fadeInLeft({ initial: 20, delay: i * 0.1 })}
                                    >
                                        <Shield
                                            name={tech.name}
                                            logo={tech.logo}
                                            color={tech.color}
                                        />
                                    </MotionFlex>
                                ))}
                            </Flex>
                        </VStack>
                    </MotionFlex>
                ))}
            </VStack>
        </MotionFlex>
    )
}

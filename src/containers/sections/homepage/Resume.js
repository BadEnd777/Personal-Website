// Importing necessary components, icons, and data
import { Flex, VStack, Heading, Text, Grid } from '@chakra-ui/react'
import { HeadingUnderline } from '@/components/HeadingUnderline'
import { ContactItems } from '@/components/ContactItems'
import { Education, WorkExperiences, Biography } from '@/data'

// Defining the Resume component
export const Resume = () => {
    // Calculating years of experience
    const yearsOfExperience = new Date().getFullYear() - 2021

    return (
        <Flex as="section" direction="column" borderTop="1px" borderColor="surface0" py="16">
            <VStack as="article" spacing="4" align="stretch">
                <VStack as="header" spacing="2" align="stretch">
                    {/* Resume heading */}
                    <HeadingUnderline>My Resume</HeadingUnderline>
                    {/* Resume description */}
                    <Text fontSize="md" color="mocha.blue">
                        Summary of my work experience and biography:
                    </Text>
                </VStack>
                <VStack spacing="4" align="stretch">
                    {/* Personal Information section */}
                    <VStack spacing="4" align="stretch">
                        <Heading as="h4" size="md">
                            Personal Information
                        </Heading>
                        {/* Contact information */}
                        <ContactItems text ignore={['github', 'instagram']} />
                    </VStack>
                    {/* Summary section */}
                    <VStack spacing="4" align="stretch">
                        <Heading as="h4" size="md">
                            Summary
                        </Heading>
                        {/* Summary text */}
                        <Text fontSize="md" color="subtext0">
                            Enthusiastic and results-driven freelance developer with a strong
                            background in web development, a passion for creating responsive and
                            efficient web solutions, and a commitment to delivering high-quality
                            work. Seeking opportunities to contribute my skills and expertise to
                            innovative projects.
                        </Text>
                    </VStack>
                    {/* Education section */}
                    <VStack spacing="4" align="stretch">
                        <Heading as="h4" size="md">
                            Education
                        </Heading>
                        {/* Mapping through Education data */}
                        {Education.map((edu, i) => (
                            <VStack
                                key={i}
                                spacing="2"
                                align="stretch"
                                borderLeft="4px"
                                borderColor="mocha.blue"
                                pl="4"
                            >
                                {/* School and date */}
                                <Text fontSize="md" color="text">
                                    {edu.school} | {edu.date}
                                </Text>
                                {/* Degree and description */}
                                <Text fontSize="md" color="subtext0">
                                    {edu.degree}
                                </Text>
                                <Text fontSize="md" color="subtext0">
                                    {edu.description}
                                </Text>
                            </VStack>
                        ))}
                    </VStack>
                    {/* Work Experience section */}
                    <VStack spacing="4" align="stretch">
                        <Heading as="h4" size="md">
                            Work Experience
                        </Heading>
                        {/* Mapping through WorkExperiences data */}
                        {WorkExperiences.map((work, i) => (
                            <VStack
                                key={i}
                                spacing="2"
                                align="stretch"
                                borderLeft="4px"
                                borderColor="mocha.blue"
                                pl="4"
                            >
                                {/* Position and date */}
                                <Text fontSize="md" color="text">
                                    {work.position} | {work.date}
                                </Text>
                                {/* Company and description */}
                                <Text fontSize="md" color="subtext0">
                                    {work.company}
                                </Text>
                                <Text fontSize="md" color="subtext0">
                                    {work.description}
                                </Text>
                            </VStack>
                        ))}
                    </VStack>
                    {/* Bio section */}
                    <VStack spacing="4" align="stretch">
                        <Heading as="h4" size="md">
                            Biography
                        </Heading>
                        {/* Mapping through Biography data */}
                        <Grid
                            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                            gap="4"
                            w="full"
                        >
                            {Biography.map((bio, i) => (
                                <VStack
                                    key={i}
                                    spacing="2"
                                    align="stretch"
                                    bg="surface0"
                                    borderRadius="md"
                                    p="4"
                                >
                                    {/* Year */}
                                    <Heading as="h5" size="md" color="mocha.blue">
                                        {bio.year}
                                    </Heading>
                                    {/* Description */}
                                    <Text fontSize="md">{bio.description}</Text>
                                </VStack>
                            ))}
                        </Grid>
                    </VStack>
                </VStack>
            </VStack>
        </Flex>
    )
}

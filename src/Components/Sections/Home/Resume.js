// Importing necessary components, icons, and data
import { VStack, HStack, Heading, Text, Grid } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Contacts } from '@/Components/Contacts'
import { workExperience, bio } from '@/data'

// Defining the Resume component
export const Resume = () => {
    // Calculating years of experience
    const yearsOfExperience = new Date().getFullYear() - 2018

    return (
        <VStack
            as="section"
            direction="column"
            id="resume"
            borderTop="1px"
            borderColor="surface0"
            py="16"
        >
            <VStack spacing="2" align="flex-start" w="full">
                {/* Resume heading */}
                <HeadingUnderline>My Resume</HeadingUnderline>
                {/* Resume description */}
                <Text fontSize="md" color="mocha.blue">
                    Summary of my work experience and biography:
                </Text>
            </VStack>
            <VStack spacing="4" align="flex-start" mt="4">
                {/* Personal Information section */}
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Personal Information
                    </Heading>
                    {/* Contact information */}
                    <Contacts text ignore={['github', 'instagram']} />
                </VStack>
                {/* Summary section */}
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Summary
                    </Heading>
                    {/* Summary text */}
                    <Text fontSize="md" color="subtext0">
                        {/* Years of experience */}I am a full-stack developer with{' '}
                        {yearsOfExperience} years of experience in web development. I have a passion
                        for learning and sharing my knowledge with others as publicly as possible. I
                        develop web applications with Next.js, React, and Node.js. I am also
                        familiar with C# and .NET. I am currently looking for a full-time position
                        as a back-end developer.
                    </Text>
                </VStack>
                {/* Work Experience section */}
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Work Experience
                    </Heading>
                    {/* Mapping through workExperience data */}
                    {workExperience.map((work, i) => (
                        <VStack
                            key={i}
                            spacing="2"
                            align="flex-start"
                            borderLeft="4px"
                            borderColor="mocha.blue"
                            pl="4"
                        >
                            <HStack spacing="2">
                                {/* Position and date */}
                                <Text fontSize="md" color="text">
                                    {work.position} &bull; {work.date}
                                </Text>
                            </HStack>
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
                <VStack spacing="4" align="flex-start" w="full">
                    <Heading as="h4" size="md">
                        Bio
                    </Heading>
                    {/* Mapping through bio data */}
                    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" w="full">
                        {bio.map((bio, i) => (
                            <VStack
                                key={i}
                                spacing="2"
                                align="flex-start"
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
    )
}

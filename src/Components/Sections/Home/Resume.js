// Importing necessary components, icons, and data
import { VStack, HStack, Heading, Text, useConst, Grid } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { MotionFlex } from '@/Components/Motion'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { fadeInUp, fadeInLeft } from '@/styles/animations'
import { workExperience, bio } from '@/data'

// Defining the Resume component
export const Resume = () => {
    // Calculating years of experience
    const yearsOfExperience = useConst(new Date().getFullYear() - 2018)

    return (
        <MotionFlex
            as="section"
            direction="column"
            id="resume"
            borderTop="1px"
            borderColor="surface0"
            py="16"
            px="4"
            {...fadeInUp({ initial: 20 })}
        >
            <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                <VStack spacing="2" align="flex-start">
                    {/* Resume heading */}
                    <Heading
                        as="h2"
                        size="xl"
                        borderBottom="4px"
                        borderColor="mocha.blue"
                        w="fit-content"
                    >
                        Resume
                    </Heading>
                    {/* Resume description */}
                    <Text fontSize="md" color="mocha.blue">
                        View my resume
                    </Text>
                </VStack>
            </MotionFlex>
            <VStack spacing="6" align="flex-start" mt="8">
                {/* Personal Information section */}
                <MotionFlex {...fadeInUp({ initial: 20 })}>
                    <VStack spacing="4" align="flex-start">
                        <Heading as="h4" size="md">
                            Personal Information
                        </Heading>
                        {/* Contact information */}
                        <HStack spacing="4" flexWrap="wrap">
                            <MotionFlex {...fadeInLeft({ initial: 20 })}>
                                <ContactItem
                                    icon={MdEmail}
                                    href="mailto:badend23@hotmail.com"
                                    text="badend23@hotmail.com"
                                />
                            </MotionFlex>
                            <MotionFlex {...fadeInLeft({ initial: 20, delay: 0.1 })}>
                                <ContactItem
                                    icon={AiFillPhone}
                                    href="tel:+66953351342"
                                    text="095 335 1342"
                                />
                            </MotionFlex>
                            <MotionFlex {...fadeInLeft({ initial: 20, delay: 0.2 })}>
                                <ContactItem icon={FaHome} text="Samut Sakhon, Thailand" />
                            </MotionFlex>
                        </HStack>
                    </VStack>
                </MotionFlex>
                {/* Summary section */}
                <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                    <VStack spacing="4" align="flex-start">
                        <Heading as="h4" size="md">
                            Summary
                        </Heading>
                        {/* Summary text */}
                        <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                            <Text fontSize="md" color="subtext0">
                                {/* Years of experience */}I am a full-stack developer with{' '}
                                {yearsOfExperience} years of experience in web development. I have a
                                passion for learning and sharing my knowledge with others as
                                publicly as possible. I develop web applications with Next.js,
                                React, and Node.js. I am also familiar with C# and .NET. I am
                                currently looking for a full-time position as a back-end developer.
                            </Text>
                        </MotionFlex>
                    </VStack>
                </MotionFlex>
                {/* Work Experience section */}
                <MotionFlex {...fadeInUp({ initial: 20, delay: 0.2 })}>
                    <VStack spacing="4" align="flex-start">
                        <Heading as="h4" size="md">
                            Work Experience
                        </Heading>
                        {/* Mapping through workExperience data */}
                        {workExperience.map((work, i) => (
                            <MotionFlex key={i} {...fadeInLeft({ initial: 20, delay: i * 0.1 })}>
                                <VStack
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
                            </MotionFlex>
                        ))}
                    </VStack>
                </MotionFlex>
                <MotionFlex {...fadeInUp({ initial: 20, delay: 0.3 })} w="full">
                    {/* Bio section */}
                    <VStack spacing="4" align="flex-start" w="full">
                        <Heading as="h4" size="md">
                            Bio
                        </Heading>
                        {/* Mapping through bio data */}
                        <Grid
                            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                            gap="4"
                            w="full"
                        >
                            {bio.map((bio, i) => (
                                <MotionFlex
                                    key={i}
                                    {...fadeInLeft({ initial: 20, delay: i * 0.1 })}
                                >
                                    <VStack
                                        spacing="2"
                                        align="flex-start"
                                        bg="surface0"
                                        p="4"
                                        borderRadius="md"
                                        w="full"
                                    >
                                        {/* Year */}
                                        <Heading as="h5" size="md" color="mocha.blue">
                                            {bio.year}
                                        </Heading>
                                        {/* Description */}
                                        <Text fontSize="md">{bio.description}</Text>
                                    </VStack>
                                </MotionFlex>
                            ))}
                        </Grid>
                    </VStack>
                </MotionFlex>
            </VStack>
        </MotionFlex>
    )
}

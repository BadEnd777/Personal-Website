import { Flex, VStack, HStack, Heading, Text, useConst, Grid } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { workExperience, bio } from '@/data'

export const Resume = () => {
    const yearsOfExperience = useConst(new Date().getFullYear() - 2018)

    return (
        <Flex
            as="section"
            direction="column"
            id="resume"
            borderTop="1px"
            borderColor="surface0"
            py="16"
            px="4"
        >
            <VStack spacing="2" align="flex-start">
                <Heading
                    as="h2"
                    size="xl"
                    borderBottom="4px"
                    borderColor="mocha.blue"
                    w="fit-content"
                >
                    Resume
                </Heading>
                <Text fontSize="md" color="mocha.blue">
                    View my resume
                </Text>
            </VStack>
            <VStack spacing="6" align="flex-start" mt="8">
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Personal Information
                    </Heading>
                    <HStack spacing="4" flexWrap="wrap">
                        <ContactItem
                            icon={MdEmail}
                            href="mailto:badend23@hotmail.com"
                            text="badend23@hotmail.com"
                        />
                        <ContactItem
                            icon={AiFillPhone}
                            href="tel:+66953351342"
                            text="095 335 1342"
                        />
                        <ContactItem icon={FaHome} text="Samut Sakhon, Thailand" />
                    </HStack>
                </VStack>
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Summary
                    </Heading>
                    <Text fontSize="md" color="subtext0">
                        I am a full-stack developer with {yearsOfExperience} years of experience in
                        web development. I have a passion for learning and sharing my knowledge with
                        others as publicly as possible. I develop web applications with Next.js,
                        React, and Node.js. I am also familiar with C# and .NET. I am currently
                        looking for a full-time position as a back-end developer.
                    </Text>
                </VStack>
                <VStack spacing="4" align="flex-start">
                    <Heading as="h4" size="md">
                        Work Experience
                    </Heading>
                    {workExperience.map((work, index) => (
                        <VStack
                            key={index}
                            spacing="2"
                            align="flex-start"
                            borderLeft="4px"
                            borderColor="mocha.blue"
                            pl="4"
                        >
                            <HStack spacing="2">
                                <Text fontSize="md" color="text">
                                    {work.position} &bull; {work.date}
                                </Text>
                            </HStack>
                            <Text fontSize="md" color="subtext0">
                                {work.company}
                            </Text>
                            <Text fontSize="md" color="subtext0">
                                {work.description}
                            </Text>
                        </VStack>
                    ))}
                </VStack>
                <VStack spacing="4" align="flex-start" w="full">
                    <Heading as="h4" size="md">
                        Bio
                    </Heading>
                    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" w="full">
                        {bio.map((bio, index) => (
                            <VStack
                                key={index}
                                spacing="2"
                                align="flex-start"
                                bg="surface0"
                                p="4"
                                borderRadius="md"
                            >
                                <Heading as="h5" size="md" color="mocha.blue">
                                    {bio.year}
                                </Heading>
                                <Text fontSize="md">{bio.description}</Text>
                            </VStack>
                        ))}
                    </Grid>
                </VStack>
            </VStack>
        </Flex>
    )
}

// Importing necessary components, libraries, and data
import { Flex, VStack, Heading, Text, Link, ButtonGroup, Button, Divider } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { contact } from '@/data'
import Image from 'next/image'

// Defining the Hero component
export const Hero = () => {
    // Using the useTypewriter hook to create a typing effect
    const [text] = useTypewriter({
        words: [
            'Full Stack Developer',
            'Web Developer',
            'Software Engineer',
            'Frontend Developer',
            'Backend Developer'
        ],
        loop: 0, // Loop indefinitely
        cursorStyle: '|', // Using '|' as cursor
        deleteSpeed: 50 // Deleting speed in milliseconds
    })

    return (
        <Flex
            as="section"
            id="hero"
            direction={{ base: 'column-reverse', lg: 'row' }}
            minH="100vh"
            align="center"
            justify="space-around"
            py="16"
            px="4"
        >
            {/* Left section */}
            <Flex direction="column" justify="center" w={{ base: '100%', lg: '50%' }}>
                <VStack spacing="4" align={{ base: 'center', lg: 'flex-start' }}>
                    {/* Main heading */}
                    <Heading as="h1" size="2xl" textAlign="center">
                        Ayo, I&apos;m{' '}
                        <Text as="span" color="mocha.blue">
                            BadEnd
                        </Text>
                    </Heading>
                    {/* Typing effect text */}
                    <Text fontSize="xl" color="mocha.blue">
                        {text}
                        <Cursor />
                    </Text>
                    {/* Introduction */}
                    <Text fontSize="md" textAlign={{ base: 'center', lg: 'left' }}>
                        I&apos;m a full stack developer based in Thailand, specializing in building
                        (and occasionally designing) exceptional websites, applications, and
                        everything in between. In addition to my knowledge base, I actively seek out
                        new technologies and stay up-to-date on industry trends and advancements.
                    </Text>
                    {/* Button group */}
                    <ButtonGroup spacing="4">
                        {/* Hire Me button */}
                        <Button
                            as={Link}
                            href="mailto:badend23@hotmail.com"
                            variant="primary"
                            _hover={{
                                bg: 'mocha.blue',
                                color: 'base',
                                opacity: '0.8',
                                textDecoration: 'none'
                            }}
                        >
                            Hire Me
                        </Button>
                        {/* Resume button */}
                        <Button
                            as={Link}
                            href="https://drive.google.com/file/d/1Z3Z3QZ3Z3QZ3QZ3QZ3QZ3QZ3QZ3QZ3QZ/view?usp=sharing"
                            variant="outline"
                        >
                            Resume
                        </Button>
                    </ButtonGroup>
                    {/* Divider */}
                    <Divider maxW="xs" mx={{ base: 'auto', lg: '0' }} />
                    {/* Contact icons */}
                    <ButtonGroup variant="ghost" spacing="4">
                        {contact.map((item, index) => (
                            <ContactItem
                                key={index}
                                icon={item.icon}
                                href={item.href}
                                aria-label={item.text}
                            />
                        ))}
                    </ButtonGroup>
                </VStack>
            </Flex>
            {/* Right section */}
            <Flex
                direction="column"
                align={{ base: 'center', lg: 'flex-end' }}
                w={{ base: '100%', lg: '50%' }}
            >
                {/* Profile image */}
                <Image
                    src="/images/profile.jpg"
                    alt="BadEnd"
                    width={500}
                    height={500}
                    priority
                    className="rounded-full"
                />
            </Flex>
        </Flex>
    )
}

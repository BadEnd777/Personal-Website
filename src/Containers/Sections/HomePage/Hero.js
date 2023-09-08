// Importing necessary components, libraries, and data
import {
    Flex,
    Heading,
    Text,
    Link,
    ButtonGroup,
    Button,
    Divider,
    useBreakpointValue
} from '@chakra-ui/react'
import { ContactItems } from '@/Components/ContactItems'
import { Image } from '@/Components/Image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

// Defining the Hero component
export const Hero = () => {
    // Using useBreakpointValue hook to determine the size of the text
    const profileSize = useBreakpointValue({ base: 300, md: 500 })

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
        cursorStyle: '|' // Using '|' as cursor
    })

    return (
        <Flex
            as="section"
            direction={{ base: 'column-reverse', lg: 'row' }}
            minH="100vh"
            align="center"
            justify="space-around"
            py="16"
            gap="8"
        >
            {/* Left section */}
            <Flex
                as="article"
                direction="column"
                align={{ base: 'center', lg: 'flex-start' }}
                textAlign={{ base: 'center', lg: 'left' }}
                flex="1"
                gap="4"
            >
                {/* Main heading */}
                <Heading as="h1" size="2xl">
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
                <Text fontSize="md">
                    I&apos;m a full stack developer based in Thailand, specializing in building (and
                    occasionally designing) exceptional websites, applications, and everything in
                    between. In addition to my knowledge base, I actively seek out new technologies
                    and stay up-to-date on industry trends and advancements.
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
                <Divider maxW="xs" />
                {/* Contact icons */}
                <ContactItems ignore={['location']} />
            </Flex>
            {/* Right section */}
            <Flex as="aside" direction="column" align={{ base: 'center', lg: 'flex-end' }} flex="1">
                {/* Profile image */}
                <Image
                    src="/images/profile.jpg"
                    alt="Profile image"
                    width={profileSize}
                    height={profileSize}
                    rounded="full"
                />
            </Flex>
        </Flex>
    )
}

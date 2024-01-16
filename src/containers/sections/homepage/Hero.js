// Importing necessary components, libraries, and data
import { Flex, Heading, Text, Link, ButtonGroup, Button, Divider, Center } from '@chakra-ui/react'
import { ContactItems } from '@/components/ContactItems'
import { Image } from '@/components/Image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
                        href="https://drive.google.com/file/d/1KTP-CPeiGef7ELX_kAYw2u7K0wU0QYJF/view?usp=sharing"
                        isExternal
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
                <Center w={{ base: '90%', lg: '100%' }}>
                    {/* Profile image */}
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile image"
                        width={500}
                        height={500}
                        rounded="full"
                    />
                </Center>
            </Flex>
        </Flex>
    )
}

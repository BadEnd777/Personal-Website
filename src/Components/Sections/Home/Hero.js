// Importing necessary components, libraries, and data
import { Flex, VStack, Heading, Text, Link, ButtonGroup, Button, Divider } from '@chakra-ui/react'
import { MotionFlex } from '@/Components/Motion'
import { Contacts } from '@/Components/Contacts'
import { Image } from '@/Components/Image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { fadeInUp } from '@/styles/animations'

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
        <MotionFlex
            as="section"
            id="hero"
            direction={{ base: 'column-reverse', lg: 'row' }}
            minH="100vh"
            align="center"
            justify="space-around"
            py="16"
            gap="8"
            {...fadeInUp({ initial: 20 })}
        >
            {/* Left section */}
            <Flex direction="column" justify="center" w={{ base: '100%', lg: '50%' }}>
                <VStack spacing="4" align={{ base: 'center', lg: 'flex-start' }}>
                    {/* Main heading */}
                    <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                        <Heading as="h1" size="2xl" textAlign="center">
                            Ayo, I&apos;m{' '}
                            <Text as="span" color="mocha.blue">
                                BadEnd
                            </Text>
                        </Heading>
                    </MotionFlex>
                    {/* Typing effect text */}
                    <Text fontSize="xl" color="mocha.blue">
                        {text}
                        <Cursor />
                    </Text>
                    {/* Introduction */}
                    <MotionFlex {...fadeInUp({ initial: 20, delay: 0.2 })}>
                        <Text fontSize="md" textAlign={{ base: 'center', lg: 'left' }}>
                            I&apos;m a full stack developer based in Thailand, specializing in
                            building (and occasionally designing) exceptional websites,
                            applications, and everything in between. In addition to my knowledge
                            base, I actively seek out new technologies and stay up-to-date on
                            industry trends and advancements.
                        </Text>
                    </MotionFlex>
                    {/* Button group */}
                    <MotionFlex {...fadeInUp({ initial: 20, delay: 0.3 })}>
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
                    </MotionFlex>
                    {/* Divider */}
                    <MotionFlex {...fadeInUp({ initial: 20, delay: 0.4 })} w="full">
                        <Divider maxW="xs" mx={{ base: 'auto', lg: '0' }} />
                    </MotionFlex>
                    {/* Contact icons */}
                    <MotionFlex {...fadeInUp({ initial: 20, delay: 0.5 })}>
                        <Contacts ignore={['location']} />
                    </MotionFlex>
                </VStack>
            </Flex>
            {/* Right section */}
            <Flex
                direction="column"
                align={{ base: 'center', lg: 'flex-end' }}
                w={{ base: '100%', lg: '50%' }}
            >
                {/* Profile image */}
                <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
                    <Image
                        src="/images/profile.jpg"
                        alt="BadEnd"
                        width={500}
                        height={500}
                        className="rounded-full"
                    />
                </MotionFlex>
            </Flex>
        </MotionFlex>
    )
}

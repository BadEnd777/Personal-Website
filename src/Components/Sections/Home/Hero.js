import { Flex, VStack, Heading, Text, Link, ButtonGroup, Button, Divider } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { contact } from '@/data'
import Image from 'next/image'

export const Hero = () => {
    const [text] = useTypewriter({
        words: [
            'Full Stack Developer',
            'Web Developer',
            'Software Engineer',
            'Frontend Developer',
            'Backend Developer'
        ],
        loop: 0,
        cursorStyle: '|',
        deleteSpeed: 50
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
            <Flex direction="column" justify="center" w={{ base: '100%', lg: '50%' }}>
                <VStack spacing="4" align={{ base: 'center', lg: 'flex-start' }}>
                    <Heading as="h1" size="2xl" textAlign="center">
                        Ayo, I&apos;m{' '}
                        <Text as="span" color="mocha.blue">
                            BadEnd
                        </Text>
                    </Heading>
                    <Text fontSize="xl" color="mocha.blue">
                        {text}
                        <Cursor />
                    </Text>
                    <Text fontSize="md" textAlign={{ base: 'center', lg: 'left' }}>
                        I&apos;m a full stack developer based in Thailand, specializing in building
                        (and occasionally designing) exceptional websites, applications, and
                        everything in between. In addition to my knowledge base, I actively seek out
                        new technologies and stay up-to-date on industry trends and advancements.
                    </Text>
                    <ButtonGroup spacing="4">
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
                        <Button
                            as={Link}
                            href="https://drive.google.com/file/d/1Z3Z3QZ3Z3QZ3QZ3QZ3QZ3QZ3QZ3QZ3QZ/view?usp=sharing"
                            variant="outline"
                        >
                            Resume
                        </Button>
                    </ButtonGroup>
                    <Divider maxW="xs" mx={{ base: 'auto', lg: '0' }} />
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
            <Flex
                direction="column"
                align={{ base: 'center', lg: 'flex-end' }}
                w={{ base: '100%', lg: '50%' }}
            >
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

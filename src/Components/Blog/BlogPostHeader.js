// Importing necessary components and libraries
import { Flex, Container, VStack, HStack, Text, ButtonGroup, Badge } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { MotionFlex } from '@/Components/Motion/MotionFlex'
import { fadeInUp } from '@/styles/animations'
import { contact } from '@/data'
import NextLink from 'next/link'
import Image from 'next/image'

// Defining the BlogPostHeader component which takes 'post' prop
export const BlogPostHeader = ({ post }) => {
    return (
        // Container with a maximum width
        <MotionFlex {...fadeInUp({ initial: 20 })}>
            <Container maxW="container.md">
                {/* Vertical stack for content alignment */}
                <VStack spacing="4" align="flex-start" w="100%">
                    {/* Flex container for header content */}
                    <Flex w="100%" justify="space-between" align="center">
                        {/* Horizontal stack for profile information */}
                        <HStack spacing="2" align="flex-start">
                            {/* Displaying profile image */}
                            <Image
                                src="/images/profile.jpg"
                                alt="BadEnd"
                                width={50}
                                height={50}
                                priority
                                className="rounded-full"
                            />
                            {/* Vertical stack for profile text */}
                            <VStack spacing="0" align="flex-start">
                                <Text fontWeight="bold">BadEnd</Text>
                                <Text color="mocha.blue">{post.meta.publishedAt}</Text>
                            </VStack>
                        </HStack>
                        {/* Button group for contact items */}
                        <ButtonGroup variant="ghost" spacing="4" display={['none', 'flex']}>
                            {/* Filtering and mapping through contact items */}
                            {contact
                                .filter(item => item.text !== 'Email' && item.text !== 'Phone')
                                .map((item, index) => (
                                    <ContactItem
                                        key={index}
                                        icon={item.icon}
                                        href={item.href}
                                        aria-label={item.text}
                                    />
                                ))}
                        </ButtonGroup>
                    </Flex>
                    {/* Button group for contact items on smaller screens */}
                    <ButtonGroup variant="ghost" spacing="4" display={['flex', 'none']}>
                        {/* Filtering and mapping through contact items */}
                        {contact
                            .filter(item => item.text !== 'Email' && item.text !== 'Phone')
                            .map((item, index) => (
                                <ContactItem
                                    key={index}
                                    icon={item.icon}
                                    href={item.href}
                                    aria-label={item.text}
                                />
                            ))}
                    </ButtonGroup>
                    {/* Horizontal stack for displaying tags */}
                    <HStack spacing="2" align="flex-start">
                        {/* Mapping through each tag and creating a Badge */}
                        {post.meta.tags.map((tag, index) => (
                            <NextLink key={tag} href={`/blog/tag/${tag}`}>
                                <Badge key={index} colorScheme="blue">
                                    {tag}
                                </Badge>
                            </NextLink>
                        ))}
                    </HStack>
                </VStack>
            </Container>
        </MotionFlex>
    )
}

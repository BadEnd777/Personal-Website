// Importing necessary components and libraries
import { VStack, HStack, Heading, Text, Button, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

// Defining the BlogCard component which takes a 'post' prop
export const BlogCard = ({ post }) => {
    return (
        // Outer container for the blog card
        <VStack
            spacing="4"
            align="flex-start"
            bg="surface0"
            borderWidth="1px"
            borderColor="surface1"
            borderRadius="md"
            transition="all 0.2s ease-in-out"
            p="4"
            _hover={{ borderColor: 'mocha.blue' }}
        >
            {/* Displaying the preview image */}
            <Image
                src={post.meta.previewImage}
                alt={post.meta.title}
                width={500}
                height={500}
                priority
                style={{
                    borderRadius: 'var(--chakra-radii-md)'
                }}
            />
            {/* Displaying the published date */}
            <Text fontSize="xs" color="subtext0">
                {post.meta.publishedAt}
            </Text>
            {/* Displaying the title */}
            <Heading size="md" fontWeight="bold" noOfLines="1">
                {post.meta.title}
            </Heading>
            {/* Displaying the description */}
            <Text fontSize="sm" color="subtext0" noOfLines="2">
                {post.meta.description}
            </Text>
            {/* Displaying tags */}
            <HStack spacing="2" wrap="wrap">
                {/* Mapping through each tag and creating a badge */}
                {post.meta.tags.map(tag => (
                    <NextLink key={tag} href={`/blog/tag/${tag}`}>
                        <Badge key={tag}>{tag}</Badge>
                    </NextLink>
                ))}
            </HStack>
            {/* Button to read the full blog post */}
            <Button
                as={NextLink}
                href={`/blog/${post.slug}`}
                rounded="md"
                _hover={{
                    textDecor: 'none',
                    bg: 'mocha.blue',
                    color: 'base',
                    opacity: '0.8'
                }}
            >
                Read More
            </Button>
        </VStack>
    )
}

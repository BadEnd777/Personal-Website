import { VStack, HStack, Grid, GridItem, Heading, Text, Button, Badge } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import NextLink from 'next/link'
import Image from 'next/image'

export const BlogList = ({ title, posts }) => {
    return (
        <VStack spacing="8" align="flex-start">
            <HeadingUnderline>{title}</HeadingUnderline>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }}
                gap="8"
            >
                {posts.map(post => (
                    <GridItem key={post.meta.title} colSpan="1">
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
                            <Text fontSize="xs" color="subtext0">
                                {post.meta.publishedAt}
                            </Text>
                            <Heading size="md" fontWeight="bold" noOfLines="1">
                                {post.meta.title}
                            </Heading>
                            <Text fontSize="sm" color="subtext0" noOfLines="3">
                                {post.meta.description}
                            </Text>
                            <HStack spacing="2" wrap="wrap">
                                {post.meta.tags.map(tag => (
                                    <NextLink key={tag} href={`/blog/tag/${tag}`}>
                                        <Badge key={tag} colorScheme="blue">
                                            {tag}
                                        </Badge>
                                    </NextLink>
                                ))}
                            </HStack>
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
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    )
}

import { VStack, HStack, Grid, GridItem, Heading, Text, Button, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

export const BlogList = ({ posts }) => {
    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}
            gap="8"
            mt="8"
        >
            {posts.map(post => (
                <GridItem key={post.meta.title} colSpan="1">
                    <VStack spacing="4" align="flex-start" bg="surface0" borderRadius="md" p="4">
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
    )
}

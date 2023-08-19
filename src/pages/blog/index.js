import {
    VStack,
    HStack,
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Link,
    Button,
    Badge
} from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Layout } from '@/Layout'
import { getAllPosts } from '@/lib/mdx'
import NextLink from 'next/link'
import dayjs from 'dayjs'

const BlogPage = ({ posts }) => {
    return (
        <Layout>
            <HeadingUnderline>Blog</HeadingUnderline>
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
                        <VStack
                            spacing="4"
                            align="flex-start"
                            bg="surface0"
                            borderRadius="md"
                            p="4"
                        >
                            <Image
                                src={post.meta.previewImage}
                                alt={post.meta.title}
                                w="100%"
                                h="300px"
                                objectFit="cover"
                                objectPosition="top"
                                borderRadius="md"
                            />
                            <Heading size="md" fontWeight="bold" noOfLines="1">
                                {post.meta.title}
                            </Heading>
                            <Text fontSize="sm" color="subtext0" noOfLines="3">
                                {post.meta.description}
                            </Text>
                            <HStack spacing="2" wrap="wrap">
                                {post.meta.tags.map(tag => (
                                    <Badge key={tag} colorScheme="blue">
                                        {tag}
                                    </Badge>
                                ))}
                            </HStack>
                            <Link
                                as={NextLink}
                                href={`/blog/${post.slug}`}
                                _hover={{ textDecor: 'none' }}
                            >
                                <Button>Read More</Button>
                            </Link>
                        </VStack>
                    </GridItem>
                ))}
            </Grid>
        </Layout>
    )
}

export default BlogPage

export const getStaticProps = async () => {
    const posts = await getAllPosts()

    const sortedPosts = posts.sort((a, b) => dayjs(b.meta.publishedAt) - dayjs(a.meta.publishedAt))

    return {
        props: {
            posts: sortedPosts
        }
    }
}

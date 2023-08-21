import { Flex, Container, VStack, HStack, Text, ButtonGroup, Badge } from '@chakra-ui/react'
import { MDXComponents } from '@/Components/MDXComponents'
import { ContactItem } from '@/Components/ContactItem'
import { MDXRemote } from 'next-mdx-remote'
import { Layout } from '@/Layout'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { contact } from '@/data'
import NextLink from 'next/link'
import Image from 'next/image'

const BlogPost = ({ post }) => {
    return (
        <Layout
            title={post.meta.title}
            description={post.meta.description}
            image={post.meta.previewImage}
            url={`blog/${post.slug}`}
        >
            <Container maxW="container.md">
                <VStack spacing="4" align="flex-start" w="100%">
                    <Flex w="100%" justify="space-between" align="center">
                        <HStack spacing="2" align="flex-start">
                            <Image
                                src="/images/profile.jpg"
                                alt="BadEnd"
                                width={50}
                                height={50}
                                priority
                                className="rounded-full"
                            />
                            <VStack spacing="0" align="flex-start">
                                <Text fontWeight="bold">BadEnd</Text>
                                <Text color="mocha.blue">{post.meta.publishedAt}</Text>
                            </VStack>
                        </HStack>
                        <ButtonGroup variant="ghost" spacing="4" display={['none', 'flex']}>
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
                    <ButtonGroup variant="ghost" spacing="4" display={['flex', 'none']}>
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
                    <HStack spacing="2" align="flex-start">
                        {post.meta.tags.map((tag, index) => (
                            <NextLink key={tag} href={`/blog/tag/${tag}`}>
                                <Badge key={index} colorScheme="blue">
                                    {tag}
                                </Badge>
                            </NextLink>
                        ))}
                    </HStack>
                    <Flex direction="column" align="flex-start" w="100%">
                        <MDXRemote {...post.mdxSource} components={MDXComponents} />
                    </Flex>
                </VStack>
            </Container>
        </Layout>
    )
}

export default BlogPost

export const getStaticPaths = async () => {
    const posts = await getAllPosts()

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params.slug)

    return {
        props: {
            post
        }
    }
}

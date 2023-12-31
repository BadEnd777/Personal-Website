// Importing necessary components and libraries
import { Container } from '@chakra-ui/react'
import { MDXComponents } from '@/components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'

// Defining the BlogPostContent component which takes 'post' prop
export const BlogPostContent = ({ post }) => (
    // Container with a maximum width
    <Container as="article" maxW="container.md" px="0">
        {/* Rendering MDX content using MDXRemote and custom components */}
        <MDXRemote {...post.mdxSource} components={MDXComponents} />
    </Container>
)

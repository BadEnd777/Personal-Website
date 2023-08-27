// Importing necessary components and libraries
import { Container, VStack } from '@chakra-ui/react'
import { MDXComponents } from '@/Components/Mdx/MDXComponents'
import { MotionFlex } from '@/Components/Motion/MotionFlex'
import { MDXRemote } from 'next-mdx-remote'
import { fadeInUp } from '@/styles/animations'

// Defining the BlogPostContent component which takes 'post' prop
export const BlogPostContent = ({ post }) => {
    return (
        // Container with a maximum width
        <MotionFlex {...fadeInUp({ initial: 20, delay: 0.1 })}>
            <Container maxW="container.md">
                {/* Vertical stack for content alignment */}
                <VStack spacing="4" align="flex-start" w="100%">
                    {/* Rendering MDX content using MDXRemote and custom components */}
                    <MDXRemote {...post.mdxSource} components={MDXComponents} />
                </VStack>
            </Container>
        </MotionFlex>
    )
}

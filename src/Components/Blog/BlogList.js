// Importing necessary components and libraries
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { MotionFlex } from '@/Components/Motion/MotionFlex'
import { BlogCard } from '@/Components/Blog/BlogCard'
import { fadeInUp } from '@/styles/animations'

// Defining the BlogList component which takes 'title' and 'posts' props
export const BlogList = ({ title, posts }) => (
    // Outer container for the blog list
    <MotionFlex {...fadeInUp({ initial: 20 })}>
        <VStack spacing="8" align="flex-start">
            {/* Displaying the title with an underline */}
            <HeadingUnderline>{title}</HeadingUnderline>
            {/* Grid for displaying blog cards */}
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }}
                gap="8"
            >
                {/* Mapping through each blog post and creating a GridItem */}
                {posts.map((post, i) => (
                    <MotionFlex
                        key={post.meta.title}
                        {...fadeInUp({ initial: 20, delay: i * 0.1 })}
                    >
                        <GridItem colSpan="1">
                            {/* Displaying the BlogCard component for each post */}
                            <BlogCard post={post} />
                        </GridItem>
                    </MotionFlex>
                ))}
            </Grid>
        </VStack>
    </MotionFlex>
)

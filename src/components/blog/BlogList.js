// Importing necessary components and libraries
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/components/HeadingUnderline'
import { BlogCard } from '@/components/blog/BlogCard'

// Defining the BlogList component which takes 'title' and 'posts' props
export const BlogList = ({ title, posts }) => (
    // Outer container for the blog list
    <VStack as="section" spacing="8" align="flex-start">
        {/* Displaying the title with an underline */}
        <HeadingUnderline as="header">{title}</HeadingUnderline>
        {/* Grid for displaying blog cards */}
        <Grid
            as="article"
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}
            gap="4"
        >
            {/* Mapping through each blog post and creating a GridItem */}
            {posts.map((post, i) => (
                <GridItem as="section" key={i}>
                    {/* Displaying the BlogCard component for each post */}
                    <BlogCard post={post} />
                </GridItem>
            ))}
        </Grid>
    </VStack>
)

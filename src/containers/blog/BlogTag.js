// Import necessary components and functions
import { HeadingUnderline } from '@/components/HeadingUnderline'
import { BlogList } from '@/components/blog/BlogList'
import { Layout } from '@/components/layout'
import { getAllPosts } from '@/lib/mdx'
import { capitalize } from '@/utils/capitalize'
import dayjs from 'dayjs'

// Define the BlogTagPage component
export const BlogTag = ({ posts, tag }) => (
    <Layout
        title={`Blog - Tag: ${capitalize(tag)}`}
        description={`Explore our blog posts related to the ${tag} tag. Gain insights, tutorials, and updates on ${tag}-related topics. Stay informed and engaged with our diverse range of articles.`}
        url={`blog/tag/${tag}`}
    >
        <HeadingUnderline>Blog - {capitalize(tag)}</HeadingUnderline>
        <BlogList posts={posts} />
    </Layout>
)

// Define the getStaticProps function to fetch data for the component
export const getStaticProps = async ({ params }) => {
    const posts = await getAllPosts()
    const filteredPosts = posts.filter(post => post.meta.tags.includes(params.tag))

    return {
        props: {
            posts: filteredPosts,
            tag: params.tag
        }
    }
}

// Define the getStaticPaths function to specify dynamic routes for tags
export const getStaticPaths = async () => {
    const posts = await getAllPosts()
    const sortedPosts = posts.sort((a, b) => dayjs(b.meta.publishedAt) - dayjs(a.meta.publishedAt))

    // Extract tags from posts, flatten the array, and get unique tags
    const tags = sortedPosts.map(post => post.meta.tags).flat()
    const uniqueTags = [...new Set(tags)]

    return {
        paths: uniqueTags.map(tag => ({
            params: {
                tag
            }
        })),
        fallback: false
    }
}

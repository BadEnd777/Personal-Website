// Import necessary components and functions
import { BlogList } from '@/components/blog/BlogList'
import { Layout } from '@/containers/layout'
import { getAllPosts } from '@/lib/mdx'

// Define the BlogPage component
export const BlogPage = ({ posts }) => (
    <Layout
        title="BadEnd - Blog"
        description="Explore the BadEnd blog for insightful articles, tutorials, and updates. Stay informed about our latest endeavors and learn from our expert contributors."
        url="blog"
    >
        <BlogList title="Blog" posts={posts} />
    </Layout>
)

// Define the getStaticProps function to fetch data for the component
export const getStaticProps = async () => {
    const posts = await getAllPosts()

    // Extract necessary data (slug and metadata) for each post
    const postsData = posts.map(({ slug, meta }) => ({ slug, meta }))

    return {
        props: {
            posts: postsData
        }
    }
}

// Import necessary components and functions
import { BlogList } from '@/Components/Blog/BlogList'
import { Layout } from '@/Layout'
import { getAllPosts } from '@/lib/mdx'

// Define the BlogPages component
const BlogPages = ({ posts }) => (
    <Layout
        title="BadEnd - Blog"
        description="Explore the BadEnd blog for insightful articles, tutorials, and updates. Stay informed about our latest endeavors and learn from our expert contributors."
        url="blog"
    >
        <BlogList title="Blog" posts={posts} />
    </Layout>
)

// Export the component as the default export
export default BlogPages

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

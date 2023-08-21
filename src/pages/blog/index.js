import { BlogList } from '@/Components/BlogList'
import { Layout } from '@/Layout'
import { getAllPosts } from '@/lib/mdx'

const BlogPages = ({ posts }) => {
    return (
        <Layout
            title="BadEnd - Blog"
            description="Explore the BadEnd blog for insightful articles, tutorials, and updates. Stay informed about our latest endeavors and learn from our expert contributors."
            url="blog"
        >
            <BlogList title="Blog" posts={posts} />
        </Layout>
    )
}

export default BlogPages

export const getStaticProps = async () => {
    const posts = await getAllPosts()

    return {
        props: {
            posts
        }
    }
}

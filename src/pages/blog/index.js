import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { BlogList } from '@/Components/BlogList'
import { Layout } from '@/Layout'
import { getAllPosts } from '@/lib/mdx'
import dayjs from 'dayjs'

const BlogPage = ({ posts }) => {
    return (
        <Layout
            title="BadEnd - Blog"
            description="Explore the BadEnd blog for insightful articles, tutorials, and updates. Stay informed about our latest endeavors and learn from our expert contributors."
            url="blog"
        >
            <HeadingUnderline>Blog</HeadingUnderline>
            <BlogList posts={posts} />
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

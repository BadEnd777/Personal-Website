import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { BlogList } from '@/Components/BlogList'
import { Layout } from '@/Layout'
import { getAllPosts } from '@/lib/mdx'
import dayjs from 'dayjs'

const BlogTagPage = ({ posts, tag }) => {
    return (
        <Layout
            title={`Blog - Tag: ${tag}`}
            description={`Explore our blog posts related to the ${tag} tag. Gain insights, tutorials, and updates on ${tag}-related topics. Stay informed and engaged with our diverse range of articles.`}
            url={`blog/tag/${tag}`}
        >
            <HeadingUnderline>Blog - {tag}</HeadingUnderline>
            <BlogList posts={posts} />
        </Layout>
    )
}

export default BlogTagPage

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

export const getStaticPaths = async () => {
    const posts = await getAllPosts()
    const sortedPosts = posts.sort((a, b) => dayjs(b.meta.publishedAt) - dayjs(a.meta.publishedAt))

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

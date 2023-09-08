// Import necessary components and functions
import { BlogPostContent } from '@/Components/Blog/BlogPostContent'
import { BlogPostHeader } from '@/Components/Blog/BlogPostHeader'
import { Layout } from '@/Containers/Layout'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'

// Define the BlogPost component
export const BlogPost = ({ post }) => (
    <Layout
        title={post.meta.title}
        description={post.meta.description}
        image={post.meta.previewImage}
        url={`blog/${post.slug}`}
    >
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
    </Layout>
)

// Define the getStaticPaths function to specify dynamic routes for posts
export const getStaticPaths = async () => {
    const posts = await getAllPosts()

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

// Define the getStaticProps function to fetch data for the component
export const getStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params.slug)

    return {
        props: {
            post
        }
    }
}

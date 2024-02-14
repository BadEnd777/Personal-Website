import { Layout } from '@/components/layout'
import { Blog } from '@/components/sections/blog'
import { OPEN_GRAPH_IMAGE } from '@/config'
import { getBlogList } from '@/lib/blog'
import type { Metadata } from 'next'

const title = 'Blog'
const description =
    'Explore a collection of articles and blog posts by BadEnd. Discover a variety of topics, ranging from web development to design and technology.'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: OPEN_GRAPH_IMAGE,
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [OPEN_GRAPH_IMAGE],
    },
}

const BlogPage = async () => {
    const blogs = await getBlogList()

    return (
        <Layout>
            <Blog blogs={blogs} />
        </Layout>
    )
}

export default BlogPage

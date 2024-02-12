import { Layout } from '@/components/layout'
import { Blog } from '@/components/sections/blog'
import { getBlogList } from '@/lib/blog'
import type { Metadata } from 'next'

const title = 'Blog'
const description =
    'Explore a collection of articles and blog posts by BadEnd. Discover a variety of topics, ranging from web development to design and technology.'
const image = 'https://badend.is-a.dev/images/open-graph.webp'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: image,
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [image],
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

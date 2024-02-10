import type { Metadata } from 'next'

import { Layout } from '@/components/layout'

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Discover a collection of articles and blog posts by BadEnd. Explore a variety of topics, ranging from web development to design and technology.',
}

const BlogPage = () => {
    return (
        <Layout className="py-4">
            <div>Blog</div>
        </Layout>
    )
}

export default BlogPage

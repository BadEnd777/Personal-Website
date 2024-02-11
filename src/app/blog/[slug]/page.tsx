import { Layout } from '@/components/layout'
import { getBlogData } from '@/lib/blog'
import { notFound } from 'next/navigation'

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
    const blog = await getBlogData(params.slug)

    if (!blog) {
        return notFound()
    }

    return (
        <Layout>
            <article className="prose prose-a:text-blue-600 max-w-none pb-20 pt-8">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>
        </Layout>
    )
}

export default BlogPostPage

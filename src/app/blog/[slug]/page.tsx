import { Layout } from '@/components/layout'
import { BlogFrontmatter, getBlogData, getBlogList } from '@/lib/blog'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const blog = await getBlogData(params.slug)

    if (!blog) {
        return notFound()
    }

    const { title, description, coverImage } = blog.metadata as BlogFrontmatter

    const image = `https://badend.is-a.dev${coverImage}`

    return {
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
}

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

export const generateStaticParams = async () => {
    const blogs = await getBlogList()

    const paths = blogs.map((blog) => ({
        slug: blog.slug,
    }))

    return paths
}

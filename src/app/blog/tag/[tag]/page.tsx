import { Layout } from '@/components/layout'
import { Blog } from '@/components/sections/blog'
import { getBlogList, getBlogTags } from '@/lib/blog'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({ params }: { params: { tag: string } }): Promise<Metadata> => {
    const { tag } = params

    if (!tag) {
        return notFound()
    }

    const decodeTag = decodeURIComponent(tag)

    const title = `BadEnd Blog - ${decodeTag}`
    const description = `Explore a collection of articles and blog posts with tag ${decodeTag} by BadEnd. Discover more ${decodeTag} related blogs.`
    const image = 'https://badend.is-a.dev/images/open-graph.webp'

    return {
        title: {
            absolute: title,
        },
        description,
        openGraph: {
            title: {
                absolute: title,
            },
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
            title: {
                absolute: title,
            },
            description,
            images: [image],
        },
    }
}

const BlogTagPage = async ({ params }: { params: { tag: string } }) => {
    const { tag } = params

    if (!tag) {
        return notFound
    }

    const decodeTag = decodeURIComponent(tag)

    const blogs = await getBlogList(decodeTag)

    return (
        <Layout>
            <Blog blogs={blogs} tag={decodeTag} />
        </Layout>
    )
}

export default BlogTagPage

export const generateStaticParams = async () => {
    const tags = await getBlogTags()

    return tags
}

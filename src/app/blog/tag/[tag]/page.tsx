import { Layout } from '@/components/layout'
import { Blog } from '@/components/sections/blog'
import { OPEN_GRAPH_IMAGE } from '@/config'
import { getBlogList, getBlogTags } from '@/lib/blog'
import { capitalize } from '@/utils/capitalize'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BlogTagPageProps {
    params: {
        tag: string
    }
}

export const generateMetadata = async ({ params }: BlogTagPageProps): Promise<Metadata> => {
    const { tag } = params

    if (!tag) {
        return notFound()
    }

    const capita = capitalize(tag)

    const title = `BadEnd Blog - ${capita}`
    const description = `Explore a collection of articles and blog posts with tag ${capita} by BadEnd. Discover more ${capita} related blogs.`

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
                    url: OPEN_GRAPH_IMAGE,
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
            images: [OPEN_GRAPH_IMAGE],
        },
    }
}

const BlogTagPage = async ({ params }: BlogTagPageProps) => {
    const { tag } = params

    if (!tag) {
        return notFound
    }

    const blogs = await getBlogList(tag)

    return (
        <Layout>
            <Blog blogs={blogs} tag={capitalize(tag)} />
        </Layout>
    )
}

export default BlogTagPage

export const generateStaticParams = async () => {
    const tags = await getBlogTags()

    return tags
}

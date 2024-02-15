import { Layout } from '@/components/layout'
import { ShareButton } from '@/components/share-button'
import { Typography } from '@/components/typography'
import { badgeVariants } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BASE_URL } from '@/config'
import { getBlogData, getBlogList } from '@/lib/blog'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
    const blog = await getBlogData(params.slug)

    if (!blog) {
        return notFound()
    }

    const { title: metaTitle, description, image: preview } = blog.metadata

    const isExternal = !preview.startsWith('/images/blog/')

    const image = isExternal ? preview : `${BASE_URL}${preview}`

    const title = `BadEnd Blog - ${metaTitle}`

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

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { slug } = params
    const blog = await getBlogData(slug)

    if (!blog) {
        return notFound()
    }

    const { metadata, content } = blog
    const { title, description, tags, image, date } = metadata

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-8 justify-between pt-8">
                <div className="flex flex-wrap gap-1 items-center">
                    {tags.map((tag) => (
                        <NextLink
                            key={tag}
                            href={`/blog/tag/${tag}`}
                            className={badgeVariants({ variant: 'secondary' })}
                        >
                            {tag}
                        </NextLink>
                    ))}
                </div>
                <ShareButton title={title} text={`${title}\n\n${description}`} url={`${BASE_URL}/blog/${slug}`} />
            </div>
            <Separator />
            <article className="prose prose-a:text-primary max-w-none pb-20">
                <p className="text-sm text-muted-foreground">{dayjs(date).format('MMMM D, YYYY')}</p>
                <Typography variant="h1">{title}</Typography>
                <p>{description}</p>
                <Image src={image} width={500} height={500} className="h-full w-full rounded" alt={title} />
                <div dangerouslySetInnerHTML={{ __html: content }} />
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

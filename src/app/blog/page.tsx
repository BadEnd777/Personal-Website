import { Layout } from '@/components/layout'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getBlogList } from '@/lib/blog'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'

const title = 'Blog'
const description =
    'Explore a collection of articles and blog posts by BadEnd. Discover a variety of topics, ranging from web development to design and technology.'
const image = 'https://badend.is-a.dev/images/open-graph.webp'

export const metadata: Metadata = {
    title: {
        template: `${title} - %s`,
        default: `${title} - Personal Website`,
    },
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
            <section className="flex flex-col space-y-8 pb-20 pt-4">
                <Typography variant="h2" underline>
                    📝 Blog
                </Typography>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {blogs.map((blog) => {
                        const { slug, metadata } = blog
                        const { title, description, coverImage, date } = metadata

                        return (
                            <Card key={slug} className="flex flex-col">
                                <CardHeader>
                                    <Image
                                        src={coverImage}
                                        alt={title}
                                        className="mb-4 w-full rounded-t-lg object-cover"
                                        width={500}
                                        height={281}
                                        priority
                                    />
                                    <CardTitle className="line-clamp-2 text-xl font-semibold leading-none tracking-tight">
                                        {title}
                                    </CardTitle>
                                    <Separator className="my-2" />
                                    <p className="text-sm text-muted-foreground">
                                        {dayjs(date).format('MMMM D, YYYY')}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3">{description}</CardDescription>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <NextLink href={`/blog/${slug}`}>
                                        <Button variant="outline" className="gap-2" aria-label="Read More">
                                            Read Full Article
                                            <span className="icon-[tabler--arrow-narrow-right] size-4" />
                                        </Button>
                                    </NextLink>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export default BlogPage

import { Typography } from '@/components/typography'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BlogData } from '@/lib/blog'
import dayjs from 'dayjs'
import Image from 'next/image'
import NextLink from 'next/link'

export const Blog = async ({ blogs, tag }: { blogs: BlogData[]; tag?: string }) => {
    const count = blogs.length

    return (
        <section className="flex flex-col space-y-8 pb-20 pt-4">
            <div className="flex items-center justify-between border-b pb-4">
                <Typography variant="h2">📝 Blog{tag && `: ${tag}`}</Typography>
                <p className="text-sm">
                    {count} article{count > 1 && 's'}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {blogs.map((blog) => {
                    const { slug, metadata } = blog
                    const { title, description, tags, image, date } = metadata

                    return (
                        <Card key={slug} className="flex flex-col">
                            <CardHeader>
                                <AspectRatio ratio={16 / 9} className="rounded-t-lg overflow-hidden w-full relative">
                                    <Image
                                        src={image}
                                        alt={title}
                                        className="object-cover w-full h-full"
                                        width={500}
                                        height={500}
                                        priority
                                    />
                                </AspectRatio>
                                <CardTitle className="line-clamp-2 text-xl font-semibold leading-none tracking-tight">
                                    {title}
                                </CardTitle>
                                <Separator className="my-2" />
                                <p className="text-sm text-muted-foreground">{dayjs(date).format('MMMM D, YYYY')}</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <CardDescription className="line-clamp-3">{description}</CardDescription>
                                <div className="flex flex-wrap gap-1">
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
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <NextLink href={`/blog/${slug}`}>
                                    <Button className="gap-2" aria-label="Read More">
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
    )
}

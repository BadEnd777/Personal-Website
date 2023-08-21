import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeCssToTop from 'rehype-css-to-top'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import fs from 'fs'

const root = process.cwd()
const postsDir = join(root, 'src', 'posts')

export const getPostBySlug = async slug => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDir, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeCodeTitles, rehypeCssToTop, rehypePrism, rehypeSlug]
        }
    })

    const publishedAt = dayjs(data.publishedAt).format('MMMM D, YYYY')

    return {
        slug: realSlug,
        meta: {
            ...data,
            publishedAt
        },
        mdxSource
    }
}

export const getAllPosts = async () => {
    const slugs = fs.readdirSync(postsDir)
    const posts = await Promise.all(slugs.map(async slug => await getPostBySlug(slug)))
    const sortedPosts = posts.sort((a, b) => dayjs(b.meta.publishedAt) - dayjs(a.meta.publishedAt))

    return sortedPosts
}

import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import matter from 'gray-matter'
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
            rehypePlugins: [rehypeCodeTitles, rehypePrism]
        }
    })

    return {
        slug: realSlug,
        meta: data,
        mdxSource
    }
}

export const getAllPosts = async () => {
    const slugs = fs.readdirSync(postsDir)
    const posts = await Promise.all(slugs.map(async slug => await getPostBySlug(slug)))
    return posts
}

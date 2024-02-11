import { access, readdir, readFile } from 'fs/promises'
import path from 'path'
import dayjs from 'dayjs'
import matter from 'gray-matter' // Parse frontmatter
import rehypeCodeTitles from 'rehype-code-titles' // Add titles to code blocks
import rehypePrismPlus from 'rehype-prism-plus' // Syntax highlighting
import rehypeSlug from 'rehype-slug' // Add IDs to headings

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { CompileResults, unified } from 'unified'

const blogPath = path.join(process.cwd(), 'src', 'blog')

export type BlogFrontmatter = {
    title: string
    description: string
    coverImage: string
    date: string
}

export type BlogData = {
    slug: string
    metadata: BlogFrontmatter
    content: CompileResults
}

export const getBlogData = async (slug: string): Promise<BlogData | null> => {
    const filePath = path.resolve(path.join(blogPath, `${slug}.mdx`))

    try {
        await access(filePath)
    } catch (err) {
        return null
    }

    const { content, data } = matter(await readFile(filePath, 'utf8'))
    const frontmatter = data as BlogFrontmatter

    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeCodeTitles)
        .use(rehypePrismPlus)
        .use(rehypeStringify)
        .process(content)

    return {
        slug,
        metadata: frontmatter,
        content: file.toString(),
    }
}

export const getBlogList = async (): Promise<BlogData[]> => {
    const files = await readdir(blogPath)

    const posts = await Promise.all(
        files.map(async (file) => {
            const slug = file.replace(/\.mdx$/, '')
            return getBlogData(slug)
        }),
    )

    /*
    // Sort by date (descending)
    const sorted = posts.sort((a, b) => {
        const dateA = dayjs(a?.metadata?.date || '')
        const dateB = dayjs(b?.metadata?.date || '')
        return dateA.isValid() && dateB.isValid() ? dateA.diff(dateB) : 0
    }) 
    */

    // Sort by date (ascending)
    const sorted = posts.sort((a, b) => {
        const dateA = dayjs(a?.metadata?.date || '')
        const dateB = dayjs(b?.metadata?.date || '')
        return dateA.isValid() && dateB.isValid() ? dateB.diff(dateA) : 0
    })

    return sorted as BlogData[]
}

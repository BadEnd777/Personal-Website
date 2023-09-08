// Import necessary modules and packages
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeCssToTop from 'rehype-css-to-top'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import fs from 'fs'

// Define the root directory and posts directory
const root = process.cwd()
const postsDir = join(root, 'src', 'data', 'blog')

// Function to retrieve a single post by its slug
export const getPostBySlug = async slug => {
    // Extract the actual slug (without '.mdx' extension)
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDir, `${realSlug}.mdx`)

    // Read the content of the file
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse the metadata and content using gray-matter
    const { data, content } = matter(fileContents)

    // Serialize the MDX content using specified rehype plugins
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypeCssToTop, rehypePrism]
        }
    })

    // Format the publish date using dayjs library
    const publishedAt = dayjs(data.publishedAt).format('MMMM D, YYYY')

    // Return the post's details
    return {
        slug: realSlug,
        meta: {
            ...data,
            publishedAt
        },
        mdxSource
    }
}

// Function to retrieve all posts
export const getAllPosts = async () => {
    // Get a list of slugs (file names) within the posts directory
    const slugs = fs.readdirSync(postsDir)

    // Filter out the blog-example.mdx file from the list of slugs
    const filteredSlugs = slugs.filter(slug => slug !== 'blog-example.mdx')

    // Fetch details of all posts using the getPostBySlug function
    const posts = await Promise.all(filteredSlugs.map(async slug => await getPostBySlug(slug)))

    // Sort the posts based on their published date in descending order
    const sortedPosts = posts.sort((a, b) => dayjs(b.meta.publishedAt) - dayjs(a.meta.publishedAt))

    // Return the sorted list of posts
    return sortedPosts
}

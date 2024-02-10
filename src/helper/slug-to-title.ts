export const slugToTitle = (slug: string) => {
    const title = slug.replace(/-/g, ' ')
    return title.charAt(0).toUpperCase() + title.slice(1)
}

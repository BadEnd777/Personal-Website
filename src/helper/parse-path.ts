export const parsePath = (path: string) => {
    return path === '/' ? 'Home' : path.slice(1).replace(/-/g, ' ')
}

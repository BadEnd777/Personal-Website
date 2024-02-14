const { NEXT_PUBLIC_BASE_URL } = process.env

const fallback = 'https://badend.is-a.dev'

export const BASE_URL = () => {
    if (!NEXT_PUBLIC_BASE_URL) {
        throw new Error('NEXT_PUBLIC_BASE_URL is not set')
    }

    return NEXT_PUBLIC_BASE_URL || fallback
}

export const OPEN_GRAPH_IMAGE = `${BASE_URL()}/images/open-graph.webp`

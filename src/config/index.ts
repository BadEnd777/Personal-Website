import { guardEnv } from 'guard-env'

const env = guardEnv(process.env, {
    NEXT_PUBLIC_BASE_URL: String,
})

export const BASE_URL = env.NEXT_PUBLIC_BASE_URL as string
export const OPEN_GRAPH_IMAGE = `${BASE_URL}/images/open-graph.webp`

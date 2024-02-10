import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

// Static site generation
export default defineConfig({
    plugins: [
        {
            ...(await import('@mdx-js/rollup')).default({
                jsx: true,
                jsxImportSource: 'solid-js',
                providerImportSource: 'solid-mdx',
            }),
            enforce: 'pre',
        },
        solidPlugin({
            extensions: ['mdx'],
            ssr: false,
        }),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

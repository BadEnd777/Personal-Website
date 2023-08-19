import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

export const fonts = {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily
}

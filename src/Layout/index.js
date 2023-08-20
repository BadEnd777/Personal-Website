import { Flex, Container } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'

export const Layout = ({ children, title, description, image, url }) => {
    const meta = {
        title: title ? title : 'BadEnd - Homepage',
        description: description
            ? description
            : 'A portfolio website for BadEnd, a software developer.',
        image: image ? image : '/images/profile.jpg',
        url: `https://badend.pages.dev/${url}`
    }

    return (
        <>
            <Head>
                <meta name="author" content="BadEnd" />
                <meta name="keywords" content="BadEnd, Portfolio, Blog, Software Developer" />
                <title>{meta.title}</title>
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={meta.url} />
                <meta property="twitter:title" content={meta.title} />
                <meta property="twitter:description" content={meta.description} />
                <meta property="twitter:image" content={meta.image} />
                <meta name="theme-color" content="#89b4fa" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Flex
                direction="column"
                maxW="100vw"
                minH="100vh"
                bg="base"
                color="text"
                overflow="hidden"
            >
                <Header />
                <Container mt="75px" maxW="8xl" minH="calc(100vh - 75px)" px="4" py="8">
                    {children}
                </Container>
                <Footer />
            </Flex>
        </>
    )
}

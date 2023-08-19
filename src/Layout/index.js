import { Flex, Container } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="author" content="BadEnd" />
                <meta name="keywords" content="BadEnd, Portfolio, Software Developer" />
                <title>BadEnd - Homepage</title>
                <meta name="title" content="BadEnd - Homepage" />
                <meta
                    name="description"
                    content="A portfolio website for BadEnd, a software developer."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://badend.pages.dev/" />
                <meta property="og:title" content="BadEnd - Portfolio" />
                <meta
                    property="og:description"
                    content="A portfolio website for BadEnd, a software developer."
                />
                <meta property="og:image" content="/images/profile.jpg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://badend.pages.dev/" />
                <meta property="twitter:title" content="BadEnd - Portfolio" />
                <meta
                    property="twitter:description"
                    content="A portfolio website for BadEnd, a software developer."
                />
                <meta property="twitter:image" content="/images/profile.jpg" />
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
                overflowX="hidden"
            >
                <Header />
                <Container mt="75px" maxW="8xl" minH="calc(100vh - 75px)" p="4">
                    {children}
                </Container>
                <Footer />
            </Flex>
        </>
    )
}

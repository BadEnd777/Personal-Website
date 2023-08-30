// Importing necessary dependencies
import { Flex, Container } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'

// Defining the Layout component
export const Layout = ({ children, title, description, image, url, ...props }) => {
    // Default values for metadata
    const defaultTitle = 'BadEnd - Homepage'
    const defaultDescription =
        'Discover the portfolio of BadEnd, a skilled software developer passionate about crafting innovative web applications. Explore projects, skills, and a journey into the world of software engineering.'
    const defaultImage = '/images/profile.jpg'
    const canonicalUrl = `https://badend.pages.dev/${url}`

    // Constructing metadata object
    const meta = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: canonicalUrl
    }

    // Rendering the component
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="author" content="BadEnd" />
                <meta
                    name="keywords"
                    content="Software Developer, Web Applications, Portfolio, BadEnd, Software Engineering, Full Stack Developer, Frontend Development, Backend Development, Web Development, Programming, Coding, Projects, Resume, Skills, Thailand, Samut Sakhon"
                />
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
                <link rel="canonical" href={meta.url} />
            </Head>
            <Flex
                direction="column"
                maxW="100vw"
                minH="100vh"
                bg="base"
                color="text"
                overflow="hidden"
                id="top"
            >
                {/* Including the Header */}
                <Header />
                <Container mt="75px" maxW="7xl" minH="calc(100vh - 75px)" py="8" {...props}>
                    {/* Inserting the actual content */}
                    {children}
                </Container>
                {/* Including the Footer */}
                <Footer />
            </Flex>
        </>
    )
}

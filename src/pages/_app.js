// Import necessary packages and components
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/css/prism.css'

// Define the Website component
const Website = ({ Component, pageProps }) => {
    const router = useRouter()

    // Add an event listener to scroll to the top on route change
    useEffect(() => {
        const handleRouteChange = () => {
            document.getElementById('top').scrollIntoView({ behavior: 'smooth' })
        }

        // Attach the event listener to the 'routeChangeComplete' event
        router.events.on('routeChangeComplete', handleRouteChange)

        // Remove the event listener when the component unmounts
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    // Define the options for the ChakraProvider
    const options = {
        theme, // Use the theme defined in src\styles\theme.js
        toastOptions: {
            // Define the default options for the toast component
            defaultOptions: { position: 'top-right', isClosable: true, duration: 3000 }
        }
    }

    return (
        // Wrap the entire application in ChakraProvider with the specified theme
        <ChakraProvider {...options}>
            {/* Render the component */}
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

// Export the component as the default export
export default Website

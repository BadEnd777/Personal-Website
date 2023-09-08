// Import necessary packages and components
import { ChakraProvider } from '@chakra-ui/react'
import { useResetPosition } from '@/Hooks/useResetPosition'
import { options } from '@/config/Chakra'
import '@/styles/css/prism.css'

// Define the App component
const App = ({ Component, pageProps }) => {
    useResetPosition()

    return (
        // Wrap the entire application in ChakraProvider with the specified theme
        <ChakraProvider {...options}>
            {/* Render the component */}
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

// Export the App component as default
export default App

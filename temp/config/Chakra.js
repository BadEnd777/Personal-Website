// Import the theme
import { theme } from '@/styles/theme'

// Define the options for the ChakraProvider
export const options = {
    theme, // Use the theme defined in src\styles\theme.js
    toastOptions: {
        // Define the default options for the toast component
        defaultOptions: { position: 'top-right', isClosable: true, duration: 3000 }
    }
}

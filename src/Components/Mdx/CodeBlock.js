// Importing necessary component
import { Code } from '@chakra-ui/react'

// Defining the CodeBlock component which takes 'props' as input
export const CodeBlock = props => {
    return (
        // Using the Code component as a preformatted code block
        <Code
            as="pre" // Render as a preformatted element
            w="100%" // Set width to 100%
            overflowX="auto" // Adding horizontal scroll if content overflows
            position="relative" // Setting the position to relative
            sx={{
                '::-webkit-scrollbar': {
                    display: 'none' // Hiding the default scrollbar for WebKit browsers
                }
            }}
            {...props} // Passing any additional props
        />
    )
}

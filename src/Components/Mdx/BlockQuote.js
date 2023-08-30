// Importing necessary component
import { Box } from '@chakra-ui/react'

// Defining the BlockQuote component which takes 'props' as input
export const BlockQuote = props => (
    // Using the Box component as a blockquote
    <Box
        as="blockquote" // Render as a blockquote element
        fontStyle="italic" // Applying italic font style
        borderLeft="4px" // Adding a left border
        borderColor="surface0" // Setting border color
        opacity={0.8} // Setting opacity
        pl={4} // Adding left padding
        mb="16px" // Adding bottom margin
        {...props} // Passing any additional props
    />
)

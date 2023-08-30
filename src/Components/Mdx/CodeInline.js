// Importing necessary component
import { Code } from '@chakra-ui/react'

// Defining the CodeInline component which takes 'props' as input
export const CodeInline = props => (
    // Using the Code component as an inline code block
    <Code
        as="code" // Render as a code element
        p=".2em .4em" // Adding padding
        m={0} // Setting margin to 0
        color="text" // Setting text color
        fontSize="85%" // Setting font size to 85%
        whiteSpace="break-spaces" // Allowing line breaks within content
        backgroundColor="surface0" // Setting background color
        borderRadius="6px" // Adding border radius
        {...props} // Passing any additional props
    />
)

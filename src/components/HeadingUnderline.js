// Importing necessary component
import { Heading } from '@chakra-ui/react'

// Defining the HeadingUnderline component
export const HeadingUnderline = ({ children, ...rest }) => (
    <Heading
        // Styling for the underline
        size="lg"
        borderBottom="4px solid"
        borderBottomColor="mocha.blue"
        width="fit-content"
        pb="2"
        {...rest}
    >
        {children}
    </Heading>
)

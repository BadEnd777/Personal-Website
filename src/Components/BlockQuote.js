import { Box } from '@chakra-ui/react'

export const BlockQuote = props => {
    return (
        <Box
            as="blockquote"
            fontStyle="italic"
            borderLeft="4px"
            borderColor="surface0"
            opacity={0.8}
            pl={4}
            mb="16px"
            {...props}
        />
    )
}

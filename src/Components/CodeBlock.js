import { Code } from '@chakra-ui/react'

export const CodeBlock = props => {
    return (
        <Code
            as="pre"
            w="100%"
            overflowX="auto"
            position="relative"
            sx={{
                '::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
            {...props}
        />
    )
}

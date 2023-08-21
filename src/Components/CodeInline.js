import { Code } from '@chakra-ui/react'

export const CodeInline = props => {
    return (
        <Code
            as="code"
            p=".2em .4em"
            m={0}
            color="text"
            fontSize="85%"
            whiteSpace="break-spaces"
            backgroundColor="surface0"
            borderRadius="6px"
            {...props}
        />
    )
}

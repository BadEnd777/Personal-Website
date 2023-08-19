import { Heading } from '@chakra-ui/react'

export const HeadingUnderline = ({ children, ...rest }) => {
    return (
        <Heading
            borderBottom="4px solid"
            borderBottomColor="mocha.blue"
            width="fit-content"
            pb="2"
            {...rest}
        >
            {children}
        </Heading>
    )
}

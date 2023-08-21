import { Box, Heading } from '@chakra-ui/react'

export const headingSizes = ['2em', '1.5em', '1.17em', '1em', '0.83em', '0.67em']
export const headingLevels = [1, 2, 3, 4, 5, 6]

export const CustomHeading = ({ children, level, id }) => {
    return (
        <Box
            w="100%"
            borderBottom="1px"
            borderColor="surface0"
            mt="24px"
            mb="16px"
            pb="0.3em"
            pos="relative"
            role="group"
            id={id}
            sx={{
                scrollMarginTop: '150px'
            }}
        >
            <Heading
                as="a"
                href={`#${id}`}
                fontSize={headingSizes[level - 1]}
                pos="absolute"
                top="50%"
                left={-4}
                transform="translate(-100%, -50%)"
                opacity={0}
                _groupHover={{ opacity: 1 }}
            >
                #
            </Heading>
            <Heading
                as={`h${level}`}
                fontSize={headingSizes[level - 1]}
                fontWeight="semibold"
                lineHeight="1.25"
            >
                {children}
            </Heading>
        </Box>
    )
}

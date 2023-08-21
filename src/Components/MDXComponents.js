import { Box, UnorderedList, OrderedList, ListItem, Heading, Text, Divider } from '@chakra-ui/react'

const HComponent = ({ children, level, id }) => {
    const sizes = ['2em', '1.5em', '1.17em', '1em', '0.83em', '0.67em']
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
                fontSize={sizes[level - 1]}
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
                fontSize={sizes[level - 1]}
                fontWeight="semibold"
                lineHeight="1.25"
            >
                {children}
            </Heading>
        </Box>
    )
}

export const MDXComponents = {
    h1: props => <HComponent level={1} {...props} />,
    h2: props => <HComponent level={2} {...props} />,
    h3: props => <HComponent level={3} {...props} />,
    h4: props => <HComponent level={4} {...props} />,
    h5: props => <HComponent level={5} {...props} />,
    h6: props => <HComponent level={6} {...props} />,
    p: props => <Text {...props} fontSize="16px" lineHeight="1.5" mb="16px" />,
    ul: props => <UnorderedList {...props} pl="32px" />,
    ol: props => <OrderedList {...props} pl="32px" />,
    li: props => <ListItem {...props} mb="4px" />,
    blockquote: props => (
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
    ),
    pre: props => (
        <Box
            as="pre"
            w="100%"
            overflowX="auto"
            sx={{
                '::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
            {...props}
        />
    ),
    hr: props => <Divider {...props} mb="16px" />
}

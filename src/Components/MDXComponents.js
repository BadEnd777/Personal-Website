import { Box, UnorderedList, OrderedList, ListItem, Heading, Text, Divider } from '@chakra-ui/react'

const HComponent = ({ children, level, id }) => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
    return (
        <Box
            w="100%"
            borderBottom="2px"
            borderColor="surface0"
            pb={2}
            my={4}
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
            <Heading as={`h${level}`} size={sizes[level - 1]}>
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
    p: props => <Text {...props} my={2} />,
    ul: props => <UnorderedList {...props} pl={8} my={2} />,
    ol: props => <OrderedList {...props} pl={8} my={2} />,
    li: props => <ListItem {...props} my={2} />,
    blockquote: props => (
        <Box
            as="blockquote"
            fontStyle="italic"
            borderLeft="4px"
            borderColor="surface0"
            opacity={0.8}
            my={2}
            pl={4}
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
    hr: props => <Divider {...props} my={8} />
}

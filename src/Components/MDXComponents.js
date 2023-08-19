import {
    Box,
    UnorderedList,
    OrderedList,
    ListItem,
    Heading,
    Text,
    Code,
    Divider
} from '@chakra-ui/react'

const HComponent = ({ children, level }) => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
    return (
        <Heading
            as={`h${level}`}
            size={sizes[level - 1]}
            w="100%"
            id={children.replace(/\s+/g, '-').toLowerCase().replace('.', '')}
            borderBottom="2px"
            borderColor="surface0"
            pb={2}
            mb={4}
        >
            {children}
        </Heading>
    )
}

export const MDXComponents = {
    h1: props => <HComponent level={1} {...props} />,
    h2: props => <HComponent level={2} {...props} />,
    h3: props => <HComponent level={3} {...props} />,
    h4: props => <HComponent level={4} {...props} />,
    h5: props => <HComponent level={5} {...props} />,
    h6: props => <HComponent level={6} {...props} />,
    p: props => <Text {...props} mb={4} />,
    ul: props => <UnorderedList {...props} pl={8} mb={4} />,
    ol: props => <OrderedList {...props} pl={8} mb={4} />,
    li: props => <ListItem {...props} mb={2} />,
    blockquote: props => (
        <Box
            as="blockquote"
            fontStyle="italic"
            borderLeft="4px"
            borderColor="surface0"
            opacity={0.8}
            mb={4}
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
    code: props => <Code {...props} bg="hsl(220, 13%, 18%)" color="hsl(220, 14%, 71%)" />,
    hr: props => <Divider {...props} my={8} />
}

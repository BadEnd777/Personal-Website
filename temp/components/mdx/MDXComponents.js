// Importing necessary components and custom components
import { UnorderedList, OrderedList, ListItem, Text, Divider } from '@chakra-ui/react'
import { CustomHeading, headingLevels } from './CustomHeading'
import { BlockQuote } from './BlockQuote'
import { CodeBlock } from './CodeBlock'
import { CodeInline } from './CodeInline'

// Defining the MDXComponents object containing custom components
export const MDXComponents = {
    // Dynamically generating custom heading components for different levels
    ...headingLevels.reduce((acc, level) => {
        // Assigning a custom component for each heading level
        acc[`h${level}`] = props => <CustomHeading level={level} id={props.id} {...props} />
        return acc
    }, {}),
    // Custom component for paragraphs
    p: props => <Text {...props} fontSize="16px" lineHeight="1.5" mb="16px" />,
    // Custom component for unordered lists
    ul: props => <UnorderedList {...props} pl="32px" />,
    // Custom component for ordered lists
    ol: props => <OrderedList {...props} pl="32px" />,
    // Custom component for list items
    li: props => <ListItem {...props} mb="4px" />,
    // Custom component for blockquotes
    blockquote: props => <BlockQuote {...props} />,
    // Custom component for code blocks
    pre: props => <CodeBlock {...props} />,
    // Custom component for inline code
    code: props => <CodeInline {...props} />,
    // Custom component for horizontal rules (dividers)
    hr: props => <Divider {...props} mb="16px" />
}

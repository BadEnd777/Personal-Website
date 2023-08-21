import { UnorderedList, OrderedList, ListItem, Text, Divider } from '@chakra-ui/react'
import { CustomHeading, headingLevels } from './CustomHeading'
import { BlockQuote } from './BlockQuote'
import { CodeBlock } from './CodeBlock'
import { CodeInline } from './CodeInline'

export const MDXComponents = {
    ...headingLevels.reduce((acc, level) => {
        acc[`h${level}`] = props => <CustomHeading level={level} id={props.id} {...props} />
        return acc
    }, {}),
    p: props => <Text {...props} fontSize="16px" lineHeight="1.5" mb="16px" />,
    ul: props => <UnorderedList {...props} pl="32px" />,
    ol: props => <OrderedList {...props} pl="32px" />,
    li: props => <ListItem {...props} mb="4px" />,
    blockquote: props => <BlockQuote {...props} />,
    pre: props => <CodeBlock {...props} />,
    code: props => <CodeInline {...props} />,
    hr: props => <Divider {...props} mb="16px" />
}

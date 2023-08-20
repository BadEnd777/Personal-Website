import { HStack, Text, Icon, Link } from '@chakra-ui/react'

export const ContactItem = ({ icon, href, text, ...rest }) => {
    return (
        <Link
            {...(href && { href, isExternal: true })}
            color="text"
            _hover={{ color: 'text' }}
            {...rest}
        >
            <HStack spacing="2">
                <Icon as={icon} boxSize="6" color="mocha.blue" />
                <Text fontSize="md">{text}</Text>
            </HStack>
        </Link>
    )
}

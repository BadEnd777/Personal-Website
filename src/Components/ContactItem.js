import { HStack, Text, Icon, Link } from '@chakra-ui/react'

export const ContactItem = ({ icon, href, text }) => {
    return (
        <Link href={href} isExternal color="text" _hover={{ color: 'text' }}>
            <HStack spacing="2">
                <Icon as={icon} boxSize="6" color="mocha.blue" />
                <Text fontSize="md">{text}</Text>
            </HStack>
        </Link>
    )
}

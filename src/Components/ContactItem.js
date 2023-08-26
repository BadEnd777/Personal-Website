// Importing necessary components
import { HStack, Text, Icon, Link } from '@chakra-ui/react'

// Defining the ContactItem component
export const ContactItem = ({ icon, href, text, ...rest }) => {
    return (
        <Link
            // Checking if href is provided and setting it as external link if true
            {...(href && { href, isExternal: true })}
            color="text"
            _hover={{ color: 'text' }}
            {...rest}
        >
            {/* Displaying the contact item */}
            <HStack spacing="2">
                {/* Displaying the icon */}
                <Icon as={icon} boxSize="6" color="mocha.blue" />
                {/* Displaying the contact item text */}
                <Text fontSize="md">{text}</Text>
            </HStack>
        </Link>
    )
}

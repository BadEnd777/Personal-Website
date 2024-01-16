// Importing necessary components
import { HStack, Text, Icon, Link } from '@chakra-ui/react'
import { Contacts } from '@/data'

// Defining the Contact component
export const ContactItems = ({ text, ignore = [], ...rest }) => (
    <>
        <HStack spacing="4" wrap="wrap" {...rest}>
            {/* Filtering and mapping through contact items */}
            {Contacts.filter(item => !ignore.includes(item.type)).map((item, index) => (
                <Link
                    key={index} // Setting the key as the index
                    color="text"
                    // Checking if href is provided and setting it as external link if true
                    {...(item.href && { href: item.href, isExternal: true })}
                >
                    {/* Displaying the contact item */}
                    <HStack spacing="2">
                        {/* Displaying the icon */}
                        <Icon as={item.icon} boxSize="6" color="mocha.blue" />
                        {/* Displaying the contact item text if text prop is provided */}
                        {text && <Text fontSize="md">{item.text}</Text>}
                    </HStack>
                </Link>
            ))}
        </HStack>
    </>
)

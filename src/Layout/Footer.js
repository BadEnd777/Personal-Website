// Importing necessary dependencies
import { Box, Flex, Container, VStack, HStack, Text, Link, useConst } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem' // Importing ContactItem component
import { contact } from '@/data' // Importing contact data

// Defining the Footer component
export const Footer = () => {
    // Calculate the current year using useConst
    const year = useConst(() => new Date().getFullYear())

    return (
        <Box as="footer" minH="80px" borderTopWidth="2px" borderColor="surface0">
            {/* Container for layout and spacing */}
            <Container maxW="8xl" p="4" h="100%">
                <Flex
                    direction={{ base: 'column', md: 'row' }} // Adjusting flex direction for different screen sizes
                    justify="space-between" // Spacing between content
                    align="center" // Aligning content vertically
                    gridGap="4" // Gap between child elements
                >
                    {/* Stack of text information */}
                    <VStack spacing="2" align={{ base: 'center', md: 'flex-start' }}>
                        <Text fontSize="sm">&copy; {year} BadEnd. All rights reserved.</Text>
                        <Text fontSize="sm">
                            This website is open source. {/* Link to the GitHub repository */}
                            <Link href="https://github.com/BadEnd777/Portfolio-Website" isExternal>
                                View on GitHub
                            </Link>
                        </Text>
                    </VStack>
                    {/* Horizontal stack of contact items */}
                    <HStack spacing="4">
                        {/* Mapping through contact data to display contact items */}
                        {contact.map((item, index) => (
                            <ContactItem
                                key={index}
                                icon={item.icon}
                                href={item.href}
                                aria-label={item.text}
                            />
                        ))}
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

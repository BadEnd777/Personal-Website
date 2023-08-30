// Importing necessary dependencies
import { Box, Flex, Container, VStack, Text, Link, useConst } from '@chakra-ui/react'
import { Contacts } from '@/Components/Contacts'

// Defining the Footer component
export const Footer = () => {
    // Calculate the current year using useConst
    const year = useConst(() => new Date().getFullYear())

    return (
        <Box as="footer" minH="80px" borderTopWidth="2px" borderColor="surface0">
            {/* Container for layout and spacing */}
            <Container maxW="7xl" py="4" h="100%">
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
                    {/* Stack of contact information */}
                    <Contacts ignore={['location']} />
                </Flex>
            </Container>
        </Box>
    )
}

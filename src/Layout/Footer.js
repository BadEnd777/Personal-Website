import { Box, Flex, Container, VStack, HStack, Text, Link, useConst } from '@chakra-ui/react'
import { ContactItem } from '@/Components/ContactItem'
import { contact } from '@/data'

export const Footer = () => {
    const year = useConst(() => new Date().getFullYear())

    return (
        <Box as="footer" h="80px" borderTopWidth="2px" borderColor="surface0">
            <Container maxW="8xl" p="4" h="100%">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    gridGap="4"
                >
                    <VStack spacing="2" align={{ base: 'center', md: 'flex-start' }}>
                        <Text fontSize="sm">&copy; {year} BadEnd. All rights reserved.</Text>
                        <Text fontSize="sm">
                            This website is open source.{' '}
                            <Link href="https://github.com/BadEnd777/Portfolio-Website" isExternal>
                                View on GitHub
                            </Link>
                        </Text>
                    </VStack>
                    <HStack spacing="4">
                        {contact.map((item, index) => (
                            <ContactItem key={index} icon={item.icon} />
                        ))}
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

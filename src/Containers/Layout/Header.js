// Importing necessary dependencies
import {
    Box,
    Flex,
    Container,
    HStack,
    Heading,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { transparentize } from '@chakra-ui/theme-tools'
import { NavLinks } from '@/Data'
import NextLink from 'next/link'

// Defining the Header component
export const Header = () => (
    <Box
        as="header"
        h="75px"
        bg={transparentize('base', 0.8)}
        borderBottom="1px solid"
        borderBottomColor="surface0"
        backdropFilter="blur(8px)"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1"
    >
        <Container as="nav" maxW="7xl" h="100%">
            <Flex justify="space-between" align="center" h="100%" w="100%">
                {/* Application logo */}
                <Heading
                    as={NextLink}
                    href="/"
                    size="md"
                    fontWeight="bold"
                    cursor="pointer"
                    _hover={{
                        textDecoration: 'none'
                    }}
                >
                    BadEnd
                </Heading>
                {/* Navigation links */}
                <HStack spacing="4" display={{ base: 'none', md: 'flex' }}>
                    {NavLinks.map(link => (
                        <Link
                            key={link.name}
                            as={NextLink}
                            href={link.href}
                            display="inline-block"
                            fontWeight="bold"
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* "Hire Me" button */}
                    <Button
                        as={Link}
                        href="mailto:badend23@hotmail.com"
                        variant="primary"
                        _hover={{
                            bg: 'mocha.blue',
                            color: 'base',
                            opacity: '0.8',
                            textDecoration: 'none'
                        }}
                    >
                        Hire Me
                    </Button>
                </HStack>
                {/* Dropdown menu for small screens */}
                <Menu placement="bottom-end">
                    <MenuButton
                        as={Button}
                        variant="primary"
                        rightIcon={<MdKeyboardArrowDown />}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        Menu
                    </MenuButton>
                    <MenuList>
                        {NavLinks.map(link => (
                            <MenuItem as={NextLink} href={link.href} key={link.name}>
                                {link.name}
                            </MenuItem>
                        ))}
                        {/* "Hire Me" menu item */}
                        <MenuItem as={Link} href="mailto:badend23@hotmail.com">
                            Hire Me
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Container>
    </Box>
)

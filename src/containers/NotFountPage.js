// Importing necessary components and libraries
import { Flex, Container } from '@chakra-ui/react'
import { NotFountContent } from '@/containers/sections/not-fount/NotFountContent'
import { TicTacToe } from '@/containers/sections/not-fount/TicTacToe'
import { useTitle } from '@/hooks/useTitle'

// Defining the NotFountPage component
export const NotFountPage = () => {
    // Using a custom hook to set the page title
    useTitle('404 - Page Not Found')

    return (
        <Container maxW="7xl" h="100vh">
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                align="center"
                justify={{ base: 'center', lg: 'space-between' }}
                h="100vh"
                gap="8"
            >
                <NotFountContent /> {/* Render the 404 content */}
                <TicTacToe /> {/* Render the Tic Tac Toe game */}
            </Flex>
        </Container>
    )
}

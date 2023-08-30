// Importing necessary components and libraries
import { Flex, Container } from '@chakra-ui/react'
import { NotFountContent } from '@/Components/Sections/NotFount/NotFountContent'
import { TicTacToe } from '@/Components/Sections/NotFount/TicTacToe'
import { useTitle } from '@/Hooks/useTitle'

// Defining the Custom404 component
const NotFount = () => {
    // Using a custom hook to set the page title
    useTitle('404 - Page Not Found')

    return (
        <Container maxW="7xl" h="100vh">
            <Flex align="center" justify="justify-between" h="100vh">
                <NotFountContent /> {/* Render the 404 content */}
                <TicTacToe /> {/* Render the Tic Tac Toe game */}
            </Flex>
        </Container>
    )
}

export default NotFount

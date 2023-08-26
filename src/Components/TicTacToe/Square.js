// Importing necessary components
import { Flex, Heading } from '@chakra-ui/react'

// Defining the Square component
export const Square = ({ value, onClick }) => (
    <Flex
        align="center"
        justify="center"
        w="100px"
        h="100px"
        border="1px solid"
        borderColor="surface1"
        onClick={onClick}
    >
        {/* Displaying the value in the cell */}
        <Heading as="h1" size="4xl" color="text">
            {value}
        </Heading>
    </Flex>
)

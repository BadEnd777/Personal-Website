// Importing necessary components and libraries
import { VStack, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'
import NextLink from 'next/link'

// Defining the NotFountContent component
export const NotFountContent = () => (
    <Flex justify="center" w="50%">
        <VStack spacing="4" align="flex-start">
            <Heading as="h1" size="4xl" fontWeight="normal">
                404
            </Heading>
            <Heading as="h2" size="xl">
                Oops! Something went wrong.
            </Heading>
            <Text fontSize="xl">
                We can&apos;t seem to find the page you&apos;re looking for. Try going back to the
                previous page.
            </Text>
            {/* Button to go back to the home page */}
            <Button as={NextLink} href="/" leftIcon={<BsArrowLeft />} rounded="md">
                Back to Home
            </Button>
            <Text fontSize="sx">Or play a game of Tic Tac Toe while you&apos;re here.</Text>
        </VStack>
    </Flex>
)

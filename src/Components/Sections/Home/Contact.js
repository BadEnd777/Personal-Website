// Importing necessary components, libraries, and data
import { Flex, VStack, Heading, Text, useBreakpoint } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Contacts } from '@/Components/Contacts'
import { Image } from '@/Components/Image'

// Defining the Contact component
export const Contact = () => {
    // Getting the current breakpoint
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'base'

    return (
        <Flex
            as="section"
            direction="column"
            id="contact"
            borderTop="1px"
            borderColor="surface0"
            py="16"
            w="full"
        >
            <VStack w="full" spacing="2" align="flex-start">
                {/* Contact section heading */}
                <HeadingUnderline>Contact</HeadingUnderline>
                {/* Contact section description */}
                <Text fontSize="md" color="mocha.blue">
                    Contact me for freelance work or anything else!
                </Text>
                {/* Contact form and details */}
                <Flex w="full" align="center" justify="center" minH="2xl">
                    {/* Contact details */}
                    <Flex direction="column">
                        <VStack spacing="4">
                            {/* Profile image */}
                            <Image
                                src="/images/profile.jpg"
                                alt="BadEnd"
                                width={400}
                                height={400}
                                rounded="full"
                            />
                            {/* Heading for contact details */}
                            <Heading as="h3" size="md">
                                Contact Details
                            </Heading>
                            {/* Displaying contact items */}
                            <Contacts text={!isMobile} ignore={['location']} justify="center" />
                            <Text fontSize="md" color="mocha.blue">
                                Feel free to contact me anytime!
                            </Text>
                        </VStack>
                    </Flex>
                </Flex>
            </VStack>
        </Flex>
    )
}

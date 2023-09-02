// Importing necessary components, libraries, and data
import { Flex, VStack, Heading, Text, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { Contacts } from '@/Components/Contacts'
import { Image } from '@/Components/Image'

// Defining the Contact component
export const Contact = () => {
    // Getting the current breakpoint
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'base'

    const profileSize = useBreakpointValue({ base: 300, md: 400 })
    const minHeadingSize = useBreakpointValue({ base: 'sm', md: '2xl', lg: 'lg' })

    return (
        <Flex as="section" direction="column" borderTop="1px" borderColor="surface0" py="16">
            <VStack as="article" spacing="4" align="stretch">
                <VStack as="header" spacing="2" align="stretch">
                    {/* Contact section heading */}
                    <HeadingUnderline>Contact</HeadingUnderline>
                    {/* Contact section description */}
                    <Text fontSize="md" color="mocha.blue">
                        Contact me for freelance work or anything else!
                    </Text>
                </VStack>
                {/* Contact form and details */}
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    minH={minHeadingSize}
                    gap="4"
                >
                    {/* Profile image */}
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile image"
                        width={profileSize}
                        height={profileSize}
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
                </Flex>
            </VStack>
        </Flex>
    )
}

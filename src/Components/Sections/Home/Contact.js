// Importing necessary components, libraries, and data
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { MotionFlex } from '@/Components/Motion'
import { Contacts } from '@/Components/Contacts'
import { Image } from '@/Components/Image'
import { fadeInUp } from '@/styles/animations'

// Defining the Contact component
export const Contact = () => {
    return (
        <MotionFlex {...fadeInUp({ initial: 20 })} w="full">
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
                                    className="rounded-full"
                                />
                                {/* Heading for contact details */}
                                <Heading as="h3" size="md">
                                    Contact Details
                                </Heading>
                                {/* Displaying contact items */}
                                <Contacts text ignore={['location']} justify="center" />
                                <Text fontSize="md" color="mocha.blue">
                                    Feel free to contact me anytime!
                                </Text>
                            </VStack>
                        </Flex>
                    </Flex>
                </VStack>
            </Flex>
        </MotionFlex>
    )
}

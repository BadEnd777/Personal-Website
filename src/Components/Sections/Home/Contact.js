import {
    Flex,
    VStack,
    HStack,
    Heading,
    Text,
    Avatar,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Textarea,
    Button,
    useToast
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { ContactItem } from '@/Components/ContactItem'
import { contact } from '@/data'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import axios from 'axios'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required').min(20, 'Too short, minimum 20 characters')
})

const initialValues = {
    name: '',
    email: '',
    message: ''
}

export const Contact = () => {
    const toast = useToast()

    dayjs.extend(utc)
    dayjs.extend(timezone)

    const handleSubmit = async (values, actions) => {
        const { name, email, message } = values
        try {
            await axios.post(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK, {
                username: 'Portfolio Website',
                avatar_url:
                    'https://cdn.discordapp.com/attachments/1079170406587576320/1079704037676548146/969002c1d5459accda19c507ec9a6cbb.jpg',
                content: `<@${process.env.NEXT_PUBLIC_DISCORD_USER_ID}>, you have a new message from your portfolio website!`,
                embeds: [
                    {
                        title: 'New Message',
                        description: `From: ${name} (${email})\n\nMessage:\n${message}`,
                        color: 0xa6e3a1,
                        timestamp: dayjs().tz('Asia/Bangkok').format()
                    }
                ],
                allowed_mentions: { parse: ['users'] }
            })

            toast({
                title: 'Message sent!',
                description: 'I will get back to you as soon as possible.',
                status: 'success',
                duration: 5000,
                isClosable: true
            })

            actions.resetForm()
        } catch (error) {
            console.log(error)
            toast({
                title: 'Something went wrong!',
                description: 'Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        } finally {
            actions.setSubmitting(false)
        }
    }

    return (
        <Flex
            as="section"
            direction="column"
            id="contact"
            borderTop="1px"
            borderColor="surface0"
            py="16"
            px="4"
        >
            <VStack w="full" spacing="2" align="flex-start">
                <Heading
                    as="h2"
                    size="xl"
                    borderBottom="4px"
                    borderColor="mocha.blue"
                    w="fit-content"
                >
                    Contact
                </Heading>
                <Text fontSize="md" color="mocha.blue">
                    Get in touch
                </Text>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    w="full"
                    align="center"
                    justify="space-between"
                    minH="2xl"
                    gridGap="8"
                >
                    <Flex direction="column" w={{ base: 'full', lg: '50%' }} align="center">
                        <VStack spacing="4">
                            <Avatar name="BadEnd" src="/images/profile.jpg" boxSize="300px" />
                            <Heading as="h3" size="md">
                                You can also find me on
                            </Heading>
                            <HStack spacing="4" flexWrap="wrap" justify="center">
                                {contact.map((item, index) => (
                                    <ContactItem key={index} {...item} />
                                ))}
                            </HStack>
                        </VStack>
                    </Flex>
                    <Flex direction="column" w={{ base: 'full', lg: '50%' }}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={ContactSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <VStack spacing="4" align="flex-start">
                                        <Field name="name">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.name && form.touched.name
                                                    }
                                                >
                                                    <FormLabel htmlFor="name">Name</FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="name"
                                                        placeholder="e.g. John Doe"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.name}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name="email">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.email && form.touched.email
                                                    }
                                                >
                                                    <FormLabel htmlFor="email">Email</FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="email"
                                                        placeholder="e.g. example@gmail.com"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.email}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name="message">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.message && form.touched.message
                                                    }
                                                >
                                                    <FormLabel htmlFor="message">Message</FormLabel>
                                                    <Textarea
                                                        {...field}
                                                        id="message"
                                                        placeholder="e.g. Hello, I would like to hire you for my project."
                                                        resize="none"
                                                        rows="5"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.message}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Button
                                            type="submit"
                                            minW="50%"
                                            alignSelf="center"
                                            isLoading={isSubmitting}
                                        >
                                            Submit
                                        </Button>
                                    </VStack>
                                </Form>
                            )}
                        </Formik>
                    </Flex>
                </Flex>
            </VStack>
        </Flex>
    )
}

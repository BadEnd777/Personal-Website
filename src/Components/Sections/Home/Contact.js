// Importing necessary components, libraries, and data
import {
    Flex,
    VStack,
    HStack,
    Heading,
    Text,
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
import Image from 'next/image'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import axios from 'axios'
import * as Yup from 'yup'

// Defining validation schema using Yup
const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required').min(20, 'Too short, minimum 20 characters')
})

// Initial form values
const initialValues = {
    name: '',
    email: '',
    message: ''
}

const formFields = [
    {
        name: 'name',
        label: 'Name',
        placeholder: 'e.g. John Doe'
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'e.g. example@gmail.com'
    },
    {
        name: 'message',
        label: 'Message',
        placeholder: 'e.g. Hello, I would like to hire you for my project.'
    }
]

// Defining the Contact component
export const Contact = () => {
    const toast = useToast()

    // Extending dayjs with UTC and timezone plugins
    dayjs.extend(utc)
    dayjs.extend(timezone)

    // Handling form submission
    const handleSubmit = async (values, actions) => {
        const { name, email, message } = values
        try {
            // Sending message data to a Discord webhook
            await axios.post(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK, {
                // Discord message details
                username: 'Portfolio Website',
                avatar_url:
                    'https://i.pinimg.com/originals/45/76/f3/4576f3d02abdf4c5486087baddc214c8.jpg',
                content: `<@${process.env.NEXT_PUBLIC_DISCORD_USER_ID}>, you have a new message from your portfolio website!`,
                embeds: [
                    {
                        title: 'New Message',
                        description: `From: ${name} (${email})\n\nMessage:\n${message}`,
                        color: 0xa6e3a1,
                        thumbnail: {
                            url: 'https://cdn.dribbble.com/users/102916/screenshots/2695186/media/e01b0fcd87010fa175b51a9078bc774e.gif'
                        },
                        timestamp: dayjs().tz('Asia/Bangkok').format() // Adding timestamp
                    }
                ],
                allowed_mentions: { parse: ['users'] } // Allowing user mentions
            })

            // Showing success toast
            toast({
                title: 'Message sent!',
                description: 'I will get back to you as soon as possible.',
                status: 'success'
            })

            // Resetting the form
            actions.resetForm()
        } catch (error) {
            console.log(error)
            // Showing error toast
            toast({
                title: 'Something went wrong!',
                description: 'Please try again later.',
                status: 'error'
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
                {/* Contact section heading */}
                <Heading
                    as="h2"
                    size="xl"
                    borderBottom="4px"
                    borderColor="mocha.blue"
                    w="fit-content"
                >
                    Contact
                </Heading>
                {/* Contact section description */}
                <Text fontSize="md" color="mocha.blue">
                    Get in touch
                </Text>
                {/* Contact form and details */}
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    w="full"
                    align="center"
                    justify="space-between"
                    minH="2xl"
                    gridGap="8"
                >
                    {/* Contact details */}
                    <Flex direction="column" w={{ base: 'full', lg: '50%' }} align="center">
                        <VStack spacing="4">
                            {/* Profile image */}
                            <Image
                                src="/images/profile.jpg"
                                alt="BadEnd"
                                width={300}
                                height={300}
                                priority
                                className="rounded-full"
                            />
                            {/* Heading for contact details */}
                            <Heading as="h3" size="md">
                                You can also find me on
                            </Heading>
                            {/* Displaying contact items */}
                            <HStack spacing="4" flexWrap="wrap" justify="center">
                                {contact.map((item, index) => (
                                    <ContactItem key={index} {...item} />
                                ))}
                            </HStack>
                        </VStack>
                    </Flex>
                    {/* Contact form */}
                    <Flex direction="column" w={{ base: 'full', lg: '50%' }}>
                        {/* Formik wrapper */}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={ContactSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {/* Form fields */}
                                    <VStack spacing="4" align="flex-start">
                                        {formFields.map((item, index) => (
                                            <Field key={index} name={item.name}>
                                                {({ field, form }) => (
                                                    <FormControl
                                                        isInvalid={
                                                            form.errors[item.name] &&
                                                            form.touched[item.name]
                                                        }
                                                    >
                                                        <FormLabel htmlFor={item.name}>
                                                            {item.label}
                                                        </FormLabel>
                                                        {item.name !== 'message' ? (
                                                            <Input
                                                                {...field}
                                                                id={item.name}
                                                                placeholder={item.placeholder}
                                                            />
                                                        ) : (
                                                            <Textarea
                                                                {...field}
                                                                id={item.name}
                                                                placeholder={item.placeholder}
                                                            />
                                                        )}
                                                        <FormErrorMessage>
                                                            {form.errors[item.name]}
                                                        </FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        ))}
                                        {/* Submit button */}
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

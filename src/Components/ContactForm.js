// Importing necessary components, and libraries
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    VStack,
    Divider,
    Heading,
    Text,
    Button,
    Link,
    useToast
} from '@chakra-ui/react'
import { FormikTextarea } from '@/Components/Formik/FormikTextarea'
import { FormikInput } from '@/Components/Formik/FormikInput'
import { FaArrowRight } from 'react-icons/fa'
import { Formik, Form } from 'formik'
import { contact } from '@/data'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import axios from 'axios'
import * as Yup from 'yup'

// Defining validation schema using Yup
const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .required('Required')
        .min(20, 'Too short, minimum 20 characters')
        .max(1000, 'Too long, maximum 1000 characters')
})

// Initial form values
const initialValues = {
    name: '',
    email: '',
    message: ''
}

// Defining form fields for looping
const formFields = [
    {
        name: 'name',
        label: 'Full Name or Company Name',
        placeholder: 'e.g. John Doe'
    },
    {
        name: 'email',
        label: 'Email Address',
        placeholder: 'e.g. example@gmail.com'
    },
    {
        name: 'message',
        label: 'Message (20-1000 characters)',
        placeholder: 'e.g. Hello, I would like to hire you for my project.'
    }
]

// Defining the ContactForm component
export const ContactForm = ({ isOpen, onClose }) => {
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

    // Rendering the ContactForm component
    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <VStack spacing="4">
                        <Heading as="h3" size="lg" fontWeight="normal">
                            Contact Me
                        </Heading>
                        <Text fontSize="sm" color="mocha.blue" align="center">
                            Please fill out the form below to send me a message.
                        </Text>
                        <Divider />
                        <Formik
                            initialValues={initialValues} // Initial form values
                            validationSchema={ContactSchema} // Validation schema
                            onSubmit={handleSubmit} // Handling form submission
                        >
                            {({ isSubmitting }) => (
                                <VStack as={Form} spacing="4" w="full">
                                    {/* Looping through form fields */}
                                    {formFields.map(field =>
                                        field.name === 'message' ? ( // If the field is a textarea
                                            <FormikTextarea
                                                key={field.name}
                                                name={field.name}
                                                label={field.label}
                                                placeholder={field.placeholder}
                                                maxH="200"
                                            />
                                        ) : (
                                            <FormikInput
                                                key={field.name}
                                                name={field.name}
                                                label={field.label}
                                                placeholder={field.placeholder}
                                            />
                                        )
                                    )}
                                    <Button
                                        type="submit"
                                        w="full"
                                        rounded="md"
                                        rightIcon={<FaArrowRight />}
                                        isLoading={isSubmitting}
                                    >
                                        Send Message
                                    </Button>
                                </VStack>
                            )}
                        </Formik>
                        <Text fontSize="sm" color="mocha.blue" align="center">
                            Or you can email me at{' '}
                            <Link
                                href={`mailto:${contact.find(item => item.type === 'email').open}`}
                                fontWeight="bold"
                                isExternal
                            >
                                {contact
                                    .find(item => item.type === 'email')
                                    .open.replace('mailto:', '')}
                            </Link>
                        </Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

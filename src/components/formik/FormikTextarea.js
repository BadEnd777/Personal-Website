// Importing necessary components, and libraries
import { FormControl, FormLabel, Textarea, FormErrorMessage } from '@chakra-ui/react'
import { useField } from 'formik'

// Defining the FormikTextarea component
export const FormikTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
            <Textarea {...field} {...props} />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

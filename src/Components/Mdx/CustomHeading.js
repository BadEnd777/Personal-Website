// Importing necessary components
import { Box, Heading } from '@chakra-ui/react'

// Array defining different sizes for headings
export const headingSizes = ['2em', '1.5em', '1.17em', '1em', '0.83em', '0.67em']

// Array defining heading levels (from h1 to h6)
export const headingLevels = [1, 2, 3, 4, 5, 6]

// Defining the CustomHeading component which takes 'children', 'level', and 'id' props
export const CustomHeading = ({ children, level, id }) => (
    // Outer container for custom heading
    <Box
        w="100%"
        borderBottom="1px"
        borderColor="surface0"
        mt="24px"
        mb="16px"
        pb="0.3em"
        pos="relative"
        role="group"
        id={id}
        sx={{
            scrollMarginTop: '150px' // Adding scroll margin to handle fixed header offset
        }}
    >
        {/* Anchor link for headings */}
        <Heading
            as="a"
            href={`#${id}`} // Linking to the corresponding anchor
            fontSize={headingSizes[level - 1]} // Applying font size based on level
            pos="absolute"
            top="50%"
            left={-4}
            transform="translate(-100%, -50%)"
            opacity={0} // Initially hidden
            _groupHover={{ opacity: 1 }} // Show on hover
        >
            #
        </Heading>
        {/* Heading element with specified level and styles */}
        <Heading
            as={`h${level}`} // Render as h1, h2, etc. based on 'level' prop
            fontSize={headingSizes[level - 1]} // Applying font size based on level
            fontWeight="semibold"
            lineHeight="1.25"
        >
            {children} {/* Content of the heading */}
        </Heading>
    </Box>
)

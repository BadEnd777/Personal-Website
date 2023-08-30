// Importing necessary dependencies
import { Skeleton } from '@chakra-ui/react'
import { useState } from 'react'
import NextImage from 'next/image'

// Defining the Image component
export const Image = ({ ...props }) => {
    // Defining a loading state
    const [loading, setLoading] = useState(true)

    return (
        // Displaying a skeleton while the image is loading
        <Skeleton isLoaded={!loading}>
            {/* Displaying the image */}
            <NextImage {...props} priority onLoadingComplete={() => setLoading(false)} />
        </Skeleton>
    )
}

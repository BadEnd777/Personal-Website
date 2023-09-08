// Importing necessary dependencies
import { Skeleton } from '@chakra-ui/react'
import { useState } from 'react'
import NextImage from 'next/image'

// Defining the Image component
export const Image = ({ src, alt, width, height, style, rounded }) => {
    // Defining a loading state
    const [loading, setLoading] = useState(true)

    return (
        // Displaying a skeleton while the image is loading
        <Skeleton
            isLoaded={!loading}
            startColor="mocha.blue"
            endColor="mocha.blue/20"
            {...(rounded && { rounded: rounded })}
        >
            {/* Displaying the image */}
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoadingComplete={() => setLoading(false)}
                priority
                style={{
                    ...style,
                    objectFit: 'cover'
                }}
                {...(rounded && { className: `rounded-${rounded}` })}
            />
        </Skeleton>
    )
}

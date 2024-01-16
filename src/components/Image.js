// Importing necessary dependencies
import NextImage from 'next/image'

// Defining the Image component
export const Image = ({ src, alt, width, height, style, rounded }) => (
    <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        style={{
            ...style,
            objectFit: 'cover'
        }}
        {...(rounded && { className: `rounded-${rounded}` })}
    />
)

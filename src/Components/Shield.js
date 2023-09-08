// Importing necessary dependencies
import { useTheme } from '@chakra-ui/react'
import { Image } from '@/components/Image'

// Defining the Shield component
export const Shield = ({ name, logo }) => {
    // Accessing Chakra UI theme
    const { colors } = useTheme()

    // Extracting background color and logo color from the theme
    const bg = colors.surface0.replace('#', '')
    const logoColor = colors.mocha.blue.replace('#', '')

    return (
        <Image
            // Constructing the shield image URL using the provided name, colors, and logo
            src={`https://img.shields.io/badge/${name}-${bg}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`}
            alt={name}
            width={500}
            height={500}
            style={{
                width: 'auto',
                height: 'auto'
            }}
        />
    )
}

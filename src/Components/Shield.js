import { Image, useTheme } from '@chakra-ui/react'

export const Shield = ({ name, logo }) => {
    const { colors } = useTheme()
    const bg = colors.surface0.replace('#', '')
    const logoColor = colors.mocha.blue.replace('#', '')

    return (
        <Image
            src={`https://img.shields.io/badge/${name}-${bg}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`}
            alt={name}
        />
    )
}

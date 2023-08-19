import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { colors } from './colors'
import { fonts } from './fonts'
import { styles } from './styles'
import { components } from './components'

export const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components
})

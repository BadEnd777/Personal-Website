export const Button = {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        _focus: {
            boxShadow: 'none'
        }
    },
    variants: {
        primary: {
            bg: 'mocha.blue',
            color: 'base',
            px: '4',
            _hover: {
                bg: 'mocha.blue',
                color: 'base',
                opacity: '0.8'
            }
        },
        secondary: {
            bg: 'surface0',
            color: 'text',
            px: '4',
            _hover: {
                bg: 'surface0',
                color: 'text',
                opacity: '0.8'
            }
        },
        outline: {
            bg: 'transparent',
            color: 'mocha.blue',
            border: '2px solid',
            borderColor: 'mocha.blue',
            px: '4',
            _hover: {
                bg: 'transparent',
                color: 'mocha.blue',
                opacity: '0.8',
                textDecoration: 'none'
            }
        },
        ghost: {
            bg: 'transparent',
            color: 'text',
            _hover: {
                bg: 'transparent',
                color: 'text',
                opacity: '0.8',
                textDecoration: 'none'
            }
        }
    },
    defaultProps: {
        variant: 'primary',
        size: 'sm'
    }
}

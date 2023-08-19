export const Input = {
    baseStyle: {
        _focus: {
            boxShadow: 'none'
        }
    },
    variants: {
        filled: {
            field: {
                bg: 'surface0',
                color: 'text',
                _hover: {
                    bg: 'surface0'
                },
                _active: {
                    bg: 'surface0'
                }
            }
        }
    },
    defaultProps: {
        variant: 'filled',
        focusBorderColor: 'mocha.blue',
        errorBorderColor: 'mocha.red'
    }
}

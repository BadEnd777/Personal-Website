export const styles = {
    global: {
        'html, body': {
            bg: 'base',
            color: 'text',
            maxWidth: '100vw',
            maxHeight: '100vh',
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
        },
        a: {
            color: 'mocha.blue',
            _hover: {
                textDecoration: 'underline',
                color: 'mocha.blue'
            }
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            th: {
                border: '1px solid',
                borderColor: 'surface0',
                fontWeight: 'semibold',
                p: 2
            },
            td: {
                border: '1px solid',
                borderColor: 'surface0',
                p: 2
            }
        },
        '::-webkit-scrollbar': {
            width: '8px'
        },
        '::-webkit-scrollbar-track': {
            background: 'surface0'
        },
        '::-webkit-scrollbar-thumb': {
            background: 'mocha.blue',
            borderRadius: '8px'
        },
        '::selection': {
            background: 'surface2'
        },
        '::-moz-selection': {
            background: 'surface2'
        },
        '.rounded-full': {
            borderRadius: 'full'
        },
        '.rehype-code-title': {
            width: '100%',
            bg: 'mantle',
            color: 'text',
            fontSize: 'sm',
            fontWeight: 'bold',
            border: '1px solid',
            borderColor: 'surface0',
            borderTopLeftRadius: 'md',
            borderTopRightRadius: 'md',
            px: 4,
            py: 2
        },
        '.rehype-code-title+pre': {
            mt: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }
    }
}

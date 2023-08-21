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
            py: 2,
            mb: 0,
            mt: 4
        },
        '.rehype-code-title+pre': {
            mt: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
        table: {
            width: '100%',
            border: '2px solid',
            borderColor: 'surface0',
            borderCollapse: 'collapse',
            th: {
                bg: 'surface0',
                fontWeight: 'bold',
                p: 2
            },
            td: {
                border: '1px solid',
                borderColor: 'surface0',
                p: 2
            }
        },
        code: {
            bg: 'surface0',
            color: 'text',
            borderRadius: 'md',
            px: 2,
            py: 1
        }
    }
}

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
        }
    }
}

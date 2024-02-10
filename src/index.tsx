/* @refresh reload */
import '@/styles/globals.css'

import { ColorModeProvider, ColorModeScript, localStorageManager } from '@kobalte/core'
import { Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import { routes } from '@/routes'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    )
}

render(
    () => (
        <>
            <ColorModeScript />
            <ColorModeProvider storageManager={localStorageManager}>
                <Router>{routes}</Router>
            </ColorModeProvider>
        </>
    ),
    root,
)

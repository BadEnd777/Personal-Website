/* @refresh reload */
import '@/styles/globals.css'

import { ColorModeProvider, ColorModeScript, localStorageManager } from '@kobalte/core'
import { Router, Route } from '@solidjs/router'
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    )
}

const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/not-found'))

render(
    () => (
        <>
            <ColorModeScript />
            <ColorModeProvider storageManager={localStorageManager}>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Router>
            </ColorModeProvider>
        </>
    ),
    root,
)

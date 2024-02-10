'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()

    const toggleColorMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button onClick={toggleColorMode} variant="ghost" size="icon" aria-label="Toggle color mode">
            <span className="icon-[tabler--sun] block size-5 dark:hidden" />
            <span className="icon-[tabler--moon-stars] hidden size-5 dark:block" />
        </Button>
    )
}
